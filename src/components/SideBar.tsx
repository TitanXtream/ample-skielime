import React, { useState } from 'react';
import { logo } from '../assets';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Icon } from '@iconify/react';

type SidebarOptionType = {
  label: string;
  icon: string;
  id: string;
};

const sidebarProps: SidebarOptionType[] = [
  {
    label: 'Dashboard',
    icon: 'ic:outline-space-dashboard',
    id: 'dashboard',
  },
  {
    label: 'Job postings',
    icon: 'ic:round-work-outline',
    id: 'job-postings',
  },
  {
    label: 'Candidates',
    icon: 'mdi:people',
    id: 'candidates',
  },
  {
    label: 'My team',
    icon: 'octicon:person-24',
    id: 'my-team',
  },
];

type SideBarProps = {
  drawerWidth: number;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({
  drawerWidth,
  mobileOpen,
  setMobileOpen,
  setIsClosing,
}: SideBarProps) => {
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        // container={container}
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: '#051C2E',
          },
        }}
      >
        {/* {drawer} */}
        <DrawerContent />
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: '#051C2E',
          },
        }}
        open
      >
        {/* {drawer} */}
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default SideBar;

const DrawerContent = () => {
  const [activeOpt, setActiveOpt] = useState('job-postings');
  return (
    <div className='px-[1rem] py-[2.5rem] flex flex-col items-center gap-y-[4rem]'>
      <Logo />
      <List
        className='w-full'
        sx={{
          fontFamily: 'Open Sans',
        }}
      >
        {sidebarProps.map((opt) => (
          <ListItem
            key={opt.id}
            disablePadding
            className={`${
              opt.id === activeOpt ? 'text-white' : 'text-white/50'
            }`}
          >
            <ListItemButton
              sx={{
                borderRight: opt.id === activeOpt ? '4px solid white' : '0px',
              }}
              className={`py-[0.7rem] flex gap-[1rem] justify-start ${
                opt.id === activeOpt
                  ? 'pl-[1rem] pr-[calc(1rem_-_4px)]'
                  : 'px-[1rem]'
              }`}
              onClick={() => setActiveOpt(opt.id)}
            >
              {/* <ListItemIcon
                sx={{
                  width: 'max-content',
                  maxWidth: '10px',
                }}
                className='w-[10px] bg-red-800'
              > */}
              <Icon icon={opt.icon} color='inherit' className='size-[1.5rem]' />
              {/* </ListItemIcon> */}
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: 'Open Sans',
                }}
                primary={opt.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const Logo = () => {
  return <img src={logo} className='h-[5rem]' />;
};

// const Option = () => {
//   return <div></div>;
// };
