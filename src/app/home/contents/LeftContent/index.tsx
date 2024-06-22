import LabelTool from '@/app/components/LabelTool';
import { Box, Card, Divider, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

interface Props {
  darkMode: any;
}
const Item = styled(Paper)(({ theme }) => ({
}));
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
          color: darkMode ? 'white' : 'black',
        }}
      >
        <Image src="/assets/profilePiture.png" width='300' height='300'  style={{ borderRadius: '18px 50% 50% 50%' }} alt="" />
      </Card>

      <Box sx={{ height: '140px', backgroundColor: darkMode ? '#333' : '#fff' }}></Box>
      <Box sx={{ textAlign: '-webkit-center' }} >
        <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>Parth Sharma</Typography>
        <LabelTool width={50} darkMode={darkMode} >
          <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
            Front-End Dev.
          </Typography>
        </LabelTool>
        <Stack
          direction="row"
          justifyContent='center'
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}>
          <Item sx={{height:'30px', backgroundColor: darkMode ? '#1976d2' : '#fff', borderRadius:'10px'}}><FacebookIcon sx={{fontSize:'30px'}} /></Item>
          <Item sx={{height:'30px', backgroundColor: darkMode ? '#1976d2' : '#fff', borderRadius:'10px'}}><InstagramIcon sx={{fontSize:'30px'}} /> </Item>
          <Item sx={{height:'30px', backgroundColor: darkMode ? '#1976d2' : '#fff', borderRadius:'10px'}}><GitHubIcon sx={{fontSize:'30px'}} /> </Item>
          <Item sx={{height:'30px', backgroundColor: darkMode ? '#1976d2' : '#fff', borderRadius:'10px'}}><LinkedInIcon sx={{fontSize:'30px'}} /> </Item>
        </Stack>
      </Box>
    </div>
  );
};

export default LeftContent;
