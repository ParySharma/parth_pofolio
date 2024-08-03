import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TodayIcon from '@mui/icons-material/Today';
import { ZomoHealthLogo } from '../components/Images/projectsLogo/zomoHealth';

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
    title: 'Frontend Developer',
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
    title: 'Zomo Health',
    role: 'Frontend Developer',
    logo: 'https://zomo-frontend.s3.amazonaws.com/feimg/auth/logo.svg',
    link: 'https://zomohealth.com/',
    bigLogoSvg: <ZomoHealthLogo />,
    date: '2023 - Present',
    location: 'Surat, India',
    bgColor: '#f1a8a8',
    description:
      'To create healthier and happier people through innovative environments and technology that engage individuals in exciting pathways towards their health goals. The platform is built using ReactJS and Redux for state management. The application is built with a mobile-first approach and is responsive on all devices.',
  },
];
