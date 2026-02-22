import jsPDF from 'jspdf';

export const generateResume = () => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(22);
  doc.text('Surya Teja Kadali', 20, 20);
  
  // Contact Info
  doc.setFontSize(10);
  doc.text('Email: tejakadali26@gmail.com | Mobile: +91-7893132326', 20, 30);
  doc.text('Portfolio: xprilion.com | Github: github.com', 20, 35);
  
  // Career Objective
  doc.setFontSize(14);
  doc.text('Career Objective', 20, 45);
  doc.setFontSize(10);
  const objective = 'To succeed in an environment of growth and excellence and earn a position that provides job satisfaction, self-development, and helps me achieve personal as well as organizational goals.';
  const splitObjective = doc.splitTextToSize(objective, 170);
  doc.text(splitObjective, 20, 52);
  
  // Education
  doc.setFontSize(14);
  doc.text('Education', 20, 65);
  doc.setFontSize(10);
  doc.text('Master of Computer Applications (MCA) - JNTUK, Kakinada (2024 - 2026)', 20, 72);
  doc.text('Bachelor of Computer Applications (BCA) - Adikavi Nannaya University (2019 - 2022)', 20, 77);
  doc.text('Intermediate (CSE) - Board of Intermediate AP (2019)', 20, 82);
  doc.text('SSC - Board of SSC (2017)', 20, 87);
  
  // Technical Skills
  doc.setFontSize(14);
  doc.text('Technical Skills', 20, 97);
  doc.setFontSize(10);
  doc.text('Languages: Python, HTML, CSS, MERN', 20, 104);
  doc.text('Frameworks/Libraries: Django, Flask', 20, 109);
  doc.text('Tools: VS Code, PyCharm', 20, 114);
  doc.text('Database/Cloud: AWS', 20, 119);
  
  // Certifications
  doc.setFontSize(14);
  doc.text('Certifications', 20, 129);
  doc.setFontSize(10);
  doc.text('Certified in Python and AWS from DataPro Computers - 2023', 20, 136);
  
  // Projects
  doc.setFontSize(14);
  doc.text('Projects', 20, 146);
  
  doc.setFontSize(11);
  doc.text('AI-POWERED LIBRARY MANAGEMENT SYSTEM', 20, 153);
  doc.setFontSize(10);
  const project1 = 'AI-powered Library Management System built using the MERN stack and TypeScript to manage book inventory, user authentication, borrowing/return processes, and provide intelligent search and recommendation features for improved library efficiency. Tech: MongoDB, Express, React, NodeJS';
  const splitProject1 = doc.splitTextToSize(project1, 170);
  doc.text(splitProject1, 20, 158);
  
  doc.setFontSize(11);
  doc.text('CAMPUSCONNECT', 20, 175);
  doc.setFontSize(10);
  const project2 = 'The College Placement Website is a full-stack web application designed to help students find internships and full-time job opportunities while enabling employers to recruit suitable candidates efficiently. The platform acts as a bridge between students and recruiters by providing a structured, user-friendly, and centralized job management system. Tech: MongoDB, Express, React, NodeJS';
  const splitProject2 = doc.splitTextToSize(project2, 170);
  doc.text(splitProject2, 20, 180);
  
  // Extra Curricular
  doc.setFontSize(14);
  doc.text('Extra Curricular Activities', 20, 205);
  doc.setFontSize(10);
  doc.text('- Worked as an active member of NSS during graduation.', 20, 212);
  doc.text('- Organized team activities and community service programs.', 20, 217);
  
  // Interests
  doc.setFontSize(14);
  doc.text('Interests', 20, 227);
  doc.setFontSize(10);
  doc.text('Learning new technologies, Exploring unknown facts, Listening to music', 20, 234);
  
  doc.save('Surya_Teja_Kadali_Resume.pdf');
};
