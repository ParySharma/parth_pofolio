import React from 'react';
import Header from '@/app/components/Header';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { WorkExpMockData } from '@/app/others/MockData';
import _map from 'lodash/map';
import Link from 'next/link';

const WorkExpTab = ({ title }: any) => {
  return (
    <div>
      <Header data={title} />
      <Grid container spacing={2}>
        {_map(WorkExpMockData, (data: any) => {
          return (
            <Grid item xs={12}>
              {/* <Accordion sx={{ minHeight: '50px', backgroundColor: '#f3f6f6' }}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls='panel1-content'
                  id='panel1-header'
                >
                  <Typography>
                    <Image
                      src={data?.logo}
                      alt='logo'
                      width={100}
                      height={10}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={7}>
                        <Typography fontWeight={600} mt={1}>
                          Project Name:- {data?.title}
                        </Typography>
                        <Typography fontWeight={600} mt={1}>
                          Role:- {data?.role}
                        </Typography>
                        <Typography fontWeight={600}>Duration: 3 months</Typography> 
                      </Grid>
                      <Grid item xs={5}>
                        {data?.bigLogoSvg}
                      </Grid>
                    </Grid>
                    <Typography fontWeight={600} mt={1}>
                      Link:- <Link href={data?.link}> Zomo Health </Link>
                    </Typography>
                    <Typography fontWeight={600} mt={1}>
                      Description:-
                    </Typography>
                    <Typography>{data?.description}</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion> */}
              <Box
                sx={{
                  backgroundColor: 'lightblue',
                  padding: '20px',
                  borderRadius: '8px',
                  color: 'black',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={7}>
                    <Typography fontWeight={600} mt={1}>
                      Project Name:- {data?.title}
                    </Typography>
                    <Typography fontWeight={600} mt={1}>
                      Role:- {data?.role}
                    </Typography>
                    {/* <Typography fontWeight={600}>Duration: 3 months</Typography> */}
                  </Grid>
                  <Grid item xs={5}>
                    {data?.bigLogoSvg}
                  </Grid>
                </Grid>
                <Typography fontWeight={600} mt={1}>
                  Link:- <Link href={data?.link}> Zomo Health </Link>
                </Typography>
                <Typography fontWeight={600} mt={1}>
                  Description:-
                </Typography>
                <Typography>{data?.description}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default WorkExpTab;
