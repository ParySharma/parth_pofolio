import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TodayIcon from '@mui/icons-material/Today';
import { ZomoHealthLogo } from '../components/Images/projectsLogo/zomoHealth';
import { Height } from '@mui/icons-material';

export const EducationData = [
  {
    id: 1,
    title: 'MCA (Master of Computer Applications)',
    date: 'Running',
    location: 'Chandigrah, India',
    bgColor: '#a8f1a8',
    description:
      'I am currently pursuing my MCA degree from Chandirah University.',
  },
  {
    id: 2,
    title: 'BCA (Bachelor of Computer Applications)',
    date: '2020 - 2023',
    location: 'Gujarat, India',
    bgColor: '#b5dbe7',
    description: 'I have completed my BCA degree from VNSGU University.',
  },
  {
    id: 3,
    title: 'HSC (Higher Secondary Certificate)',
    date: '2018 - 2019',
    location: 'Gujarat, India',
    bgColor: '#f1a8a8',
    description: 'I have completed my HSC from Open Board.',
  },
];

export const WorkExpData = [
  {
    id: 1,
    title: 'ReactJs Developer',
    date: '2023 - Present',
    location: 'Surat, India',
    bgColor: '#f1a8a8',
    description:
      'I am currently working as a Frontend Developer at Atologist Infotech.',
  },
  {
    id: 2,
    title: 'Computer Teacher',
    date: '2022 - 2023',
    location: 'Surat, India',
    bgColor: '#a8f1a8',
    description:
      'I have worked as a Computer Teacher at Shree Saraswati School.',
  },

  {
    id: 3,
    title: 'Sales Executive',
    date: '2020 - 2022',
    location: 'Surat, India',
    bgColor: '#a8bdf1',
    description:
      'Worked as a Sales Executive at Zota Health Care (Dava India).',
  },
];

export const PersonalData = [
  {
    id: 1,
    title: 'Phone Number',
    description: '+ 91 6351531523',
    icon: (
      <PhoneIphoneIcon
        sx={{
          fontSize: '40px',
          color: 'lightblue',
          '&:hover': {
            color: 'blue',
          },
        }}
      />
    ),
  },
  {
    id: 2,
    title: 'Email',
    description: 'parthwebest@gmail.com',
    icon: (
      <ContactMailIcon
        sx={{
          fontSize: '40px',
          color: 'lightblue',
          '&:hover': {
            color: 'blue',
          },
        }}
      />
    ),
  },
  {
    id: 3,
    title: 'Location',
    description: 'Gujarat, India',
    icon: (
      <PersonPinIcon
        sx={{
          fontSize: '40px',
          color: 'lightblue',
          '&:hover': {
            color: 'blue',
          },
        }}
      />
    ),
  },
  {
    id: 4,
    title: 'Birth',
    description: 'Oct 01, 1999',
    icon: (
      <TodayIcon
        sx={{
          fontSize: '40px',
          color: 'lightblue',
          '&:hover': {
            color: 'blue',
          },
        }}
      />
    ),
  },
];

export const SkillsData = [
  {
    id: 1,
    title: 'HTML',
    bgColor: '#f1a8a8',
  },
  {
    id: 2,
    title: 'CSS',
    bgColor: '#a8f1a8',
  },
  {
    id: 3,
    title: 'JavaScript',
    bgColor: '#a8bdf1',
  },
  {
    id: 4,
    title: 'ReactJS',
    bgColor: '#f1a8a8',
  },
  {
    id: 5,
    title: 'NodeJS',
    bgColor: '#a8f1a8',
  },
  {
    id: 6,
    title: 'MongoDB',
    bgColor: '#a8bdf1',
  },
  {
    id: 7,
    title: 'ExpressJS',
    bgColor: '#f1a8a8',
  },
  {
    id: 8,
    title: 'Material UI',
    bgColor: '#a8f1a8',
  },
  {
    id: 9,
    title: 'Bootstrap',
    bgColor: '#a8bdf1',
  },
  {
    id: 10,
    title: 'Sass',
    bgColor: '#f1a8a8',
  },
  {
    id: 11,
    title: 'Git',
    bgColor: '#a8f1a8',
  },
  {
    id: 12,
    title: 'GitHub',
    bgColor: '#a8bdf1',
  },
  {
    id: 13,
    title: 'WordPress',
    bgColor: '#f1a8a8',
  },
  {
    id: 14,
    title: 'KineMaster',
    bgColor: '#a8f1a8',
  },
  {
    id: 15,
    title: 'PicsArt',
    bgColor: '#a8bdf1',
  },
  {
    id: 16,
    title: 'VN Video Editor',
    bgColor: '#f1a8a8',
  },
  {
    id: 17,
    title: 'MS Office',
    bgColor: '#a8f1a8',
  },
  {
    id: 18,
    title: 'CapCut',
    bgColor: '#a8bdf1',
  },
];

export const WorkExpMockData = [
  {
    id: 1,
    title: 'Atologist Infotech',
    role: 'ReactJs Developer',
    logo: '/assets/atologist-infotech.png',
    link: 'https://zomohealth.com/',
    height: 80,
    width: 250,
    bigLogoSvg: '',
    date: '02/2023 - Present',
    location: 'Surat, India',
    bgColor: '#f1a8a8',
    description:
      'At Atologist Infotech, I developed responsive and interactive web applications using React.js, Next.js, HTML, CSS, and JavaScript. I collaborated with back-end teams to integrate APIs, resolved cross-browser compatibility issues, and built reusable UI components for scalability. My work focused on optimizing performance, ensuring seamless user experiences, and integrating third-party APIs into web solutions',
  },
  {
    id: 2,
    title: 'Shri Sharaswati School',
    role: 'Computer Teacher',
    logo: '/assets/jmpct-logo.png',
    link: 'https://www.zotahealthcare.com/',
    Height: 100,
    width: 100,
    bigLogoSvg: '',
    date: '2022 - 2023',
    location: 'Surat, India',
    bgColor: '#f1a8a8',
    description: `As a Computer Teacher at Shri Sharaswati School, I taught students from 5th to 12th standard, covering essential topics such as programming fundamentals, Microsoft Office, HTML, and basic computer operations. I focused on making technical concepts engaging and practical, ensuring students gained hands-on experience.

      Beyond computer education, I also had the opportunity to teach Social Science, English, and Science to students up to 8th standard, helping them develop a strong foundation in these subjects. By incorporating interactive learning methods, I aimed to make lessons more understandable and enjoyable for students`,
  },
  {
    id: 3,
    title: 'Zota Health Care (Dava India)',
    role: 'Sales Executive',
    logo: '/assets/zomoHealthLogo.png',

    link: 'https://jmpct.org/',
    height: 120,
    width: 280,
    bigLogoSvg: '',
    date: '2020 - 2022',
    location: 'Surat, India',
    bgColor: '#f1a8a8',
    description: `As a Sales & Dispatch Manager, I managed the end-to-end order processing—from taking orders and generating bills to dispatching medicines and ensuring timely payment collection. I coordinated with suppliers, streamlined logistics, and maintained accurate records to ensure smooth operations and customer satisfaction. My role required attention to detail, strong communication, and efficient multitasking to handle daily sales and dispatch activities seamlessly`,
  },
];
