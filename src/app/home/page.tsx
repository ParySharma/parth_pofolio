'use client';
import React, { useEffect, useState } from 'react';
import CardStyled from '../components/Card';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LeftContent from './contents/LeftContent';
import AboutTab from './Tabs/AboutTab';
import ResumeTab from './Tabs/ResumeTab';
import WorkExpTab from './Tabs/WorkExpTab';
import ContactTab from './Tabs/ContactTab';
import HandelsTab from './Tabs/HandelsTab';

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
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 900;
    setMobile(mobile);
    window.addEventListener('resize', () => {
      setMobile(window.innerWidth < 900);
    });
  }, []);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const TabView = ({ tabtype }: any) => {
    return (
      <CardStyled
        darkMode={darkMode}
        overflow='auto'
        height={mobile ? 'auto' : ''}
        mb={mobile ? 2 : ''}
      >
        <Tabs
          className='tabsss'
          orientation={tabtype}
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
    );
  };

  return (
    <div>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={2}
        marginBottom={10}
      >
        <Grid item xs={12} sm={12} md={0.2}></Grid>
        <Grid item xs={12} sm={12} md={3}>
          <CardStyled darkMode={darkMode} height={mobile ? 'auto' : ''}>
            <LeftContent darkMode={darkMode} />
          </CardStyled>
        </Grid>
        {mobile ? (
          <Grid item xs={4} sm={12} md={1}>
            <TabView tabtype='horizontal' />
          </Grid>
        ) : (
          ''
        )}
        <Grid item xs={12} sm={12} md={7}>
          <CardStyled darkMode={darkMode}>
            <Box>
              <TabPanel value={value} index={0}>
                <AboutTab />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ResumeTab />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <WorkExpTab />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ContactTab />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <HandelsTab />
              </TabPanel>
            </Box>
          </CardStyled>
        </Grid>
        {!mobile ? (
          <Grid item xs={12} sm={12} md={1.5}>
            <TabView tabtype='vertical' />
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
