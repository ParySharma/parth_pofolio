import { UnderDevSvg } from '@/app/components/Images/svgs';
import React from 'react';
import Header from '@/app/components/Header';
import { Grid, Typography } from '@mui/material';

const HandelsTab = ({ title }: any) => {
  return (
    <div>
      <Header data={title} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            <UnderDevSvg />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HandelsTab;
