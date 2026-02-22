import { GoogleGenAI, Modality } from "@google/genai";

/**
 * Adds a WAV header to raw PCM data so it can be played by the browser.
 * Gemini TTS returns raw 16-bit linear PCM at 24kHz.
 */
const addWavHeader = (pcmData: Uint8Array, sampleRate: number = 24000): Blob => {
  const header = new ArrayBuffer(44);
  const view = new DataView(header);

  // RIFF identifier
  view.setUint32(0, 0x52494646, false); // "RIFF"
  // file length
  view.setUint32(4, 36 + pcmData.length, true);
  // RIFF type
  view.setUint32(8, 0x57415645, false); // "WAVE"
  // format chunk identifier
  view.setUint32(12, 0x666d7420, false); // "fmt "
  // format chunk length
  view.setUint32(16, 16, true);
  // sample format (raw)
  view.setUint16(20, 1, true);
  // channel count
  view.setUint16(22, 1, true);
  // sample rate
  view.setUint32(24, sampleRate, true);
  // byte rate (sample rate * block align)
  view.setUint32(28, sampleRate * 2, true);
  // block align (channel count * bytes per sample)
  view.setUint16(32, 2, true);
  // bits per sample
  view.setUint16(34, 16, true);
  // data chunk identifier
  view.setUint32(36, 0x64617461, false); // "data"
  // data chunk length
  view.setUint32(40, pcmData.length, true);

  return new Blob([header, pcmData], { type: 'audio/wav' });
};

export const getWelcomeAudio = async (): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: 'Say in a powerful, epic Marvel superhero style: Welcome to the website!' }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            // 'Fenrir' is chosen for its powerful, dramatic quality
            prebuiltVoiceConfig: { voiceName: 'Fenrir' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      // Convert base64 to Uint8Array
      const binaryString = window.atob(base64Audio);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Add WAV header (Gemini TTS defaults to 24kHz)
      const audioBlob = addWavHeader(bytes, 24000);
      return URL.createObjectURL(audioBlob);
    }
  } catch (error) {
    console.error("TTS Pre-fetch Error:", error);
  }
  return null;
};

export const speakWelcome = async (prefetchedUrl?: string | null) => {
  try {
    const audioUrl = prefetchedUrl || await getWelcomeAudio();
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      await audio.play();
      // Cleanup URL after playing if it was generated on the fly
      if (!prefetchedUrl) {
        audio.onended = () => URL.revokeObjectURL(audioUrl);
      }
    }
  } catch (error) {
    console.error("TTS Playback Error:", error);
  }
};
