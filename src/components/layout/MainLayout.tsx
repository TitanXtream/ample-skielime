import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
      <CssBaseline />

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
          px: '3rem',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
