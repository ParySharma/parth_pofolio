import { Box, Grid, Typography } from '@mui/material';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import React from 'react';
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import Headers from '@/app/components/Header';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styled from 'styled-components';
import _map from 'lodash/map';
import { EducationData, SkillsData, WorkExpData } from '@/app/others/MockData';

const StyledBox: any = styled(Box)`
  border-radius: 10px;
  padding: 16px;
  min-height: 100px;
  color: white;
  margin-top: 24px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const ResumeTab = ({ title, resumeButton }: any) => {
  return (
    <>
      <Headers data={title} resumeButton={resumeButton} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography
            variant='h4'
            display='flex'
            gap='15px'
            alignItems='flex-end'
            fontWeight={500}
            marginBottom={3}
          >
            <SchoolSharpIcon style={{ fontSize: '45px', color: 'lightblue' }} />
            Education
          </Typography>
          <div>
            {_map(EducationData, (item: any, index: number) => {
              return (
                <StyledBox style={{ backgroundColor: item?.bgColor }}>
                  <Typography style={{ fontSize: '16px', fontWeight: '500' }}>
                    {item?.date}
                  </Typography>
                  <Typography style={{ fontSize: '18px', fontWeight: '500' }}>
                    {item?.title}
                  </Typography>
                  <Typography style={{ fontSize: '14px', fontWeight: '400' }}>
                    {item?.location}
                  </Typography>
                  <Typography style={{ fontSize: '14px', fontWeight: '400' }}>
                    {item?.description}
                  </Typography>
                </StyledBox>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant='h4'
            display='flex'
            gap='15px'
            alignItems='flex-end'
            fontWeight={500}
            marginBottom={3}
          >
            <BadgeSharpIcon style={{ fontSize: '45px', color: 'lightblue' }} />
            Experience
          </Typography>
          <div>
            {_map(WorkExpData, (item: any, index: number) => {
              return (
                <StyledBox style={{ backgroundColor: item?.bgColor }}>
                  <Typography style={{ fontSize: '16px', fontWeight: '500' }}>
                    {item?.date}
                  </Typography>
                  <Typography style={{ fontSize: '18px', fontWeight: '500' }}>
                    {item?.title}
                  </Typography>
                  <Typography style={{ fontSize: '14px', fontWeight: '400' }}>
                    {item?.location}
                  </Typography>
                  <Typography style={{ fontSize: '14px', fontWeight: '400' }}>
                    {item?.description}
                  </Typography>
                </StyledBox>
              );
            })}
          </div>
        </Grid>
      </Grid>
      <div>
        <Typography
          variant='h4'
          display='flex'
          gap='15px'
          alignItems='flex-end'
          fontWeight={500}
          marginBottom={3}
          marginTop={3}
        >
          <AutoAwesomeIcon style={{ fontSize: '45px', color: 'lightblue' }} />{' '}
          Skills
        </Typography>
        <Box
          sx={{
            backgroundColor: '#f3f6f6',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '15px',
            textAlign: 'center',
          }}
        >
          {_map(SkillsData, (item: any, index: number) => {
            return (
              <Box
                sx={{
                  backgroundColor: item?.bgColor,
                  padding: '10px',
                  borderRadius: '8px',
                  margin: '5px',
                  display: 'inline-block',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                  },
                }}
              >
                <Typography style={{ fontSize: '16px', fontWeight: '500' }}>
                  {item?.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default ResumeTab;
