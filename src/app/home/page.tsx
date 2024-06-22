'use client';
import React, { useState } from 'react';
import CardStyled from '../components/Card';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LeftContent from './contents/LeftContent';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const HomePage = ({ darkMode }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid
        container
        style={{ gap: '24px', width: 'auto', marginLeft: '25px' }}
      >
        <Grid item xs={3}>
          <CardStyled darkMode={darkMode}>
            <LeftContent darkMode={darkMode} />
          </CardStyled>
        </Grid>
        <Grid item xs={7}>
          <CardStyled darkMode={darkMode}>
            <Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
            </Box>
          </CardStyled>
        </Grid>
        <Grid item xs={1}>
          <CardStyled darkMode={darkMode} padding={10}>
            <Tabs
              className='tabsss'
              orientation='vertical'
              value={value}
              onChange={handleChange}
            >
              <Tab
                className='RightTabs'
                sx={{ padding: '0px' }}
                icon={<PersonOutlineOutlinedIcon />}
                label='About'
                {...a11yProps(0)}
              />
              <Tab
                className='RightTabs'
                sx={{ padding: '0px' }}
                icon={<DescriptionOutlinedIcon />}
                label='Resume'
                {...a11yProps(1)}
              />
              <Tab
                className='RightTabs'
                sx={{ padding: '0px' }}
                icon={<BadgeOutlinedIcon />}
                label='Work Ex.'
                {...a11yProps(2)}
              />
              <Tab
                className='RightTabs'
                sx={{ padding: '0px' }}
                icon={<ContactsOutlinedIcon />}
                label='Contact'
                {...a11yProps(3)}
              />
              <Tab
                className='RightTabs'
                sx={{ padding: '0px' }}
                icon={<InterestsOutlinedIcon />}
                label='Handels'
                {...a11yProps(4)}
              />
            </Tabs>
          </CardStyled>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
