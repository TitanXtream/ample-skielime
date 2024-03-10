import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ActivityTab } from '.';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: '1rem' }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = ['Active', 'Drafts', 'Archive'];

const TabsGroup = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            '& .MuiTabs-indicator': {
              height: '3px',
            },
          }}
        >
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              label={tab}
              {...a11yProps(i)}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ActivityTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography fontSize={'1.5rem'}>Under development</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography fontSize={'1.5rem'}>Under development</Typography>
      </CustomTabPanel>
    </>
  );
};

export default TabsGroup;
