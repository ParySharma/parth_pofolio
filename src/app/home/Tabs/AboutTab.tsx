import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from '@/app/components/Header';
import ImportantDevicesSharpIcon from '@mui/icons-material/ImportantDevicesSharp';
import styled from 'styled-components';
import AutoFixHighSharpIcon from '@mui/icons-material/AutoFixHighSharp';

const StyledBox: any = styled(Box)`
  border-radius: 10px;
  padding: 16px;
  min-height: 150px;
  color: white;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const AboutTab = ({ title }: any) => {
  return (
    <>
      <div>
        <Header data={title} />
      </div>
      <div>
        <Typography style={{ fontSize: '18px', wordSpacing: '5px' }}>
          {`  Hello! I’m Parth Sharma, a versatile front-end web developer with a
          talent for turning complex problems into beautiful, user-friendly
          digital experiences. In addition to web development, I dabble in video
          creation, video editing and image editing, ensuring a cohesive and
          visually appealing presence.`}
          <br />
          {`My passion for innovation drives me to
          push the boundaries of what’s possible, whether it’s crafting dynamic
          interfaces or creating engaging multimedia content. Let’s bring
          creativity, precision and a little bit of magic to your vision.`}
        </Typography>
      </div>
      <div>
        <Typography variant='h4' fontWeight={600} style={{ marginTop: '20px' }}>
          What I do!
        </Typography>
      </div>
      <div>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={6}>
            <StyledBox sx={{ backgroundColor: 'lightgreen' }}>
              <Grid container>
                <Grid item xs={3}>
                  <ImportantDevicesSharpIcon sx={{ fontSize: 70 }} />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant='h5' fontWeight={600}>
                    Web Development
                  </Typography>
                  <Typography>
                    {` I specialize in creating responsive, user-friendly websites
                    that are both functional and beautiful. Whether you need a
                    simple landing page or a complex web application, I'll bring
                    your vision to life.`}
                  </Typography>
                </Grid>
              </Grid>
            </StyledBox>
          </Grid>
          <Grid item xs={6}>
            <StyledBox sx={{ backgroundColor: 'pink' }}>
              <Grid container>
                <Grid item xs={3}>
                  <AutoFixHighSharpIcon sx={{ fontSize: 70 }} />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant='h5' fontWeight={600}>
                    Multimedia Content
                  </Typography>
                  <Typography>
                    {` I create engaging multimedia content that helps you connect
                    with your audience. From video creation to image editing, I
                    ensure your brand stands out in a crowded digital landscape.`}
                  </Typography>
                </Grid>
              </Grid>
            </StyledBox>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AboutTab;
