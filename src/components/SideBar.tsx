import React, { useState } from 'react';
import { logo } from '../assets';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
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
      sx={{
        width: { lg: drawerWidth },
        flexShrink: { lg: 0 },
        background: 'red',
      }}
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
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: '#051C2E',
          },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: '#051C2E',
          },
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default SideBar;

const DrawerContent = () => {
  const [activeOpt, setActiveOpt] = useState('job-postings');
  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      px={'1rem'}
      py={'2.5rem'}
      columnGap={'4rem'}
      // className='px-[1rem] py-[2.5rem] gap-y-[4rem]'
    >
      <Logo />
      <List
        // className='w-full'
        sx={{
          fontFamily: 'Open Sans',
          width: '100%',
        }}
      >
        {sidebarProps.map((opt) => (
          <ListItem
            key={opt.id}
            disablePadding
            sx={{
              color: opt.id === activeOpt ? 'white' : '#ffffff50',
            }}
          >
            <ListItemButton
              sx={{
                borderRight: opt.id === activeOpt ? '4px solid white' : '0px',
                py: '0.7rem',
                display: 'flex',
                justifyContent: 'start',
                gap: '1em',
                ...(opt.id === activeOpt
                  ? {
                      pl: '1rem',
                      pr: 'calc(1rem_-_4px)',
                    }
                  : {
                      px: '1rem',
                    }),
              }}
              // className={`py-[0.7rem] flex gap-[1rem] justify-start ${
              //   opt.id === activeOpt
              //     ? 'pl-[1rem] pr-[calc(1rem_-_4px)]'
              //     : 'px-[1rem]'
              // }`}
              onClick={() => setActiveOpt(opt.id)}
            >
              {/* <ListItemIcon
                sx={{
                  width: 'max-content',
                  maxWidth: '10px',
                }}
                className='w-[10px] bg-red-800'
              > */}

              <Icon
                icon={opt.icon}
                color='inherit'
                // className='size-[1.5rem]'
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                }}
              />
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
    </Stack>
  );
};

const Logo = () => {
  return (
    <img
      src={logo}
      style={{
        height: '5rem',
      }}
    />
  );
};

// const Option = () => {
//   return <div></div>;
// };
