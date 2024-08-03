'use client';
import React, { useEffect, useState } from 'react';
import CardStyled from '../components/Card';
import { Box, Grid, Tab, Tabs } from '@mui/material';
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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
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
    const handleResize = () => {
      setMobile(window.innerWidth < 900);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    console.log('value', value);
  };

  const renderTabContent = (index: number) => {
    switch (index) {
      case 1:
        return <ResumeTab title='Resume' resumeButton={true} />;
      case 2:
        return <WorkExpTab title='Work Expreience' resumeButton={false} />;
      case 3:
        return <ContactTab title='Contact' resumeButton={false} />;
      // case 4:
      //   return <HandelsTab title='Handles' resumeButton={false} />;
      default:
        return <AboutTab title='About Me' resumeButton={false} />;
    }
  };

  const TabView = ({ tabtype }: any) => (
    <CardStyled
      darkMode={darkMode}
      overflow='auto'
      height={mobile ? 'auto' : '600px'}
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
        {/* <Tab
          className='RightTabs'
          sx={{ padding: '0px' }}
          icon={<InterestsOutlinedIcon />}
          label='Handels'
          {...a11yProps(4)}
        /> */}
      </Tabs>
    </CardStyled>
  );

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
          <CardStyled
            darkMode={darkMode}
            height={mobile ? 'auto' : 'fit-content'}
            minheight='600px'
          >
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
          <CardStyled
            darkMode={darkMode}
            height='fit-content'
            minheight='600px'
          >
            <Box>
              <TabPanel value={value} index={value}>
                <Box padding={4}>{renderTabContent(value)}</Box>
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
