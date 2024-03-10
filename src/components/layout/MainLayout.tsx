import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideBar from '../SideBar';
import { Topbar } from '..';

const drawerWidth = 250;

interface Props {
  children: React.ReactNode;
}

export default function Mainlayout({ children }: Props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  return (
    <Box sx={{ display: 'flex', background: '#F4F7FE', minHeight: '100vh' }}>
      <Topbar
        drawerWidth={drawerWidth}
        isClosing={isClosing}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <SideBar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setIsClosing={setIsClosing}
        setMobileOpen={setMobileOpen}
      />

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          px: { sm: '3rem', xs: '1.5rem' },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          pb: '1.5rem',
        }}
      >
        <Toolbar
          sx={{
            height: '6rem',
          }}
        />
        {children}
      </Box>
    </Box>
  );
}
