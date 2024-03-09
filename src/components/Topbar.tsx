import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { headerBgImage } from '../assets';

type TopbarProps = {
  drawerWidth: number;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isClosing: boolean;
  mobileOpen: boolean;
};
const Topbar = ({
  drawerWidth,
  isClosing,
  mobileOpen,
  setMobileOpen,
}: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
      // color='red'
      position='fixed'
      sx={{
        // backgroundImage: headerBgImage,
        backgroundImage: `url('${headerBgImage}')`,
        backgroundPositionY: '50%',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      className='bg-blend-overlay'
    >
      <Toolbar>
        <Button
          color='inherit'
          // aria-label='open drawer'
          // edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          {/* <MenuIcon /> */}
          Click here
        </Button>
        <Typography variant='h6' noWrap component='div'>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
