'use client';

import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const index = ({ data, resumeButton }: any) => {
  return (
    <div>
      <Grid container alignItems='center' spacing={5} mb={3}>
        <Grid item>
          <Typography variant='h3' fontWeight={600}>
            {data}
          </Typography>
        </Grid>
        <Grid item xs={resumeButton ? 4 : 4}>
          <hr
            style={{
              height: '3px',
              borderRadius: '8px',
              backgroundColor: 'lightblue',
            }}
          />
        </Grid>
        {resumeButton ? (
          <Grid item xs={resumeButton && 4} textAlign='end'>
            <Button
              variant='contained'
              color='primary'
              download={true}
              href='/assets/parth_Sharma_Resume.pdf'
              style={{
                borderRadius: '8px',
              }}
            >
              Download Resume
            </Button>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
};

export default index;
