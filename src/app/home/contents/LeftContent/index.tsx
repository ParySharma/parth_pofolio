'use client';
import LabelTool from '@/app/components/LabelTool';
import {
  Box,
  Card,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import _map from 'lodash/map';
import { PersonalData } from '@/app/others/MockData';
import Link from 'next/link';

const StyledBox = styled(Box)`
  height: 100%;
  min-height: 300px;
  background-color: #f3f6f6;
  margin-top: 20px;
  border-radius: 12px;
  padding: 24px 0px;
`;

const StyledStack = styled(Stack)`
  .MuiDivider-root {
    background-color: #333;
  }
  :hover {
    background-color: lightblue;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    scale: 1.02;
    transition: all 0.2s ease-in-out;
    color: blue;
  }
  .MuiPaper-root {
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface Props {
  darkMode: any;
}

const Item = styled(Paper)(({ theme }) => ({}));
const LeftContent: React.FC<Props> = ({ darkMode }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Card
        style={{
          position: 'absolute',
          top: '100px',
          padding: '5px',
          backgroundColor: darkMode ? '#1976d2' : '#fff',
          borderRadius: '18px 50% 50% 50%',
          marginLeft: '-4px',
          height: '300px',
          color: darkMode ? '#fff' : 'black',
        }}
      >
        <Image
          src='/assets/profilePiture.jpg'
          width='300'
          height='300'
          style={{ borderRadius: '18px 50% 50% 50%' }}
          alt=''
        />
      </Card>
      <Box
        sx={{ height: '140px', backgroundColor: darkMode ? '#333' : '#fff' }}
      ></Box>
      <Box sx={{ textAlign: '-webkit-center' }}>
        <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>
          Parth Sharma
        </Typography>
        <LabelTool width={50} darkMode={darkMode}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '2px',
              color: darkMode ? '#fff' : '#000',
              '&:hover': {
                color: darkMode ? '#fff' : '#000',
                backgroundColor: darkMode ? '#1976d2' : '#fff',
                transition: 'all 0.2s ease-in-out',
              },
            }}
          >
            Frontend Developer
          </Typography>
        </LabelTool>
        <StyledStack
          direction='row'
          justifyContent='center'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={2}
        >
          <Link href='https://www.facebook.com/Pary.Sharmaa'>
            <Item
              sx={{
                backgroundColor: darkMode ? '#1976d2' : '#fff',
              }}
            >
              <FacebookIcon sx={{ fontSize: '30px' }} />
            </Item>
          </Link>
          <Link href='https://www.instagram.com/_.parysharma/'>
            <Item
              sx={{
                backgroundColor: darkMode ? '#1976d2' : '#fff',
              }}
            >
              <InstagramIcon sx={{ fontSize: '30px' }} />{' '}
            </Item>
          </Link>
          <Link href='https://github.com/ParySharma'>
            <Item
              sx={{
                backgroundColor: darkMode ? '#1976d2' : '#fff',
              }}
            >
              <GitHubIcon sx={{ fontSize: '30px' }} />{' '}
            </Item>
          </Link>
          <Link href='https://www.linkedin.com/in/parth-sharma-a9a77b1b0/'>
            <Item
              sx={{
                backgroundColor: darkMode ? '#1976d2' : '#fff',
              }}
            >
              <LinkedInIcon sx={{ fontSize: '30px' }} />{' '}
            </Item>
          </Link>
        </StyledStack>
      </Box>
      <StyledBox>
        {_map(PersonalData, (data: any) => (
          <TextField
            id='input-with-icon-textfield'
            label={data.title}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>{data.icon}</InputAdornment>
              ),
            }}
            variant='standard'
            value={data.description}
            sx={{
              marginBottom: '20px',
              '& .MuiInputBase-root': {
                height: '50px',
                fontSize: '16px',
                color: darkMode ? '#fff' : '#000',
              },
              '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled':
                {
                  fontSize: '22px',
                },
            }}
          />
        ))}
        {/* <TextField
          id='input-with-icon-textfield'
          label='Phone Number'
          disabled
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PhoneIphoneIcon sx={{ fontSize: '50px' }} />
              </InputAdornment>
            ),
          }}
          variant='standard'
          value={'+91 6351531523'}
          sx={{
            '& .MuiInputBase-root': {
              height: '60px',
              fontSize: '22px',
              color: darkMode ? '#fff' : '#000',
            },
            '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled':
              {
                fontSize: '22px',
              },
          }}
        /> */}
      </StyledBox>
    </div>
  );
};

export default LeftContent;
