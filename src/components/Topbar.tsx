import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { avatarImage, companyLogo, headerBgImage } from '../assets';
import ButtonGroup from '@mui/material/ButtonGroup';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
import { Icon } from '@iconify/react/dist/iconify.js';

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
      component={'header'}
      position='fixed'
      sx={{
        // backgroundImage: headerBgImage,
        backgroundImage: `url('${headerBgImage}')`,
        backgroundColor: '#1490C9',
        backgroundPositionY: '50%',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      className='bg-blend-overlay'
    >
      <Toolbar
        className='bg-transparent'
        sx={{
          height: '6rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
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
        {/* <Typography variant='h6' noWrap component='div'>
          Responsive drawer
        </Typography> */}
        <SplitButton />
        <Box>
          <Typography
            className='font-bold text-[1.25rem]'
            fontFamily={'Poppins'}
          >
            Developing <span className='text-[#051C2E]'>great products</span>
            <span className='italic font-normal'>, fast.</span>
          </Typography>
          {/* <Typography>Developing</Typography>
          <Typography></Typography>
          <Typography></Typography> */}
        </Box>
        <Stack direction={'row'} gap={'2rem'} alignItems={'center'}>
          <Badge
            badgeContent={4}
            color='primary'
            sx={{
              '& .MuiBadge-badge': {
                height: '1.5rem',
                width: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: 700,
              },
            }}
          >
            <Icon icon={'iconoir:bell'} className='size-[1.5rem]' />
          </Badge>
          <AppBarProfile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

// const options = [
//   'Create a merge commit',
//   'Squash and merge',
//   'Rebase and merge',
// ];

function SplitButton() {
  // const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleClick = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`);
  // };

  // const handleMenuItemClick = (
  //   event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  //   index: number
  // ) => {
  //   setSelectedIndex(index);
  //   setOpen(false);
  // };

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event: Event) => {
  //   if (
  //     anchorRef.current &&
  //     anchorRef.current.contains(event.target as HTMLElement)
  //   ) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <ButtonGroup
        variant='contained'
        ref={anchorRef}
        aria-label='Button group with a nested menu'
      >
        {/* <Button onClick={handleClick}>{options[selectedIndex]}</Button> */}
        <Button
          size='small'
          // aria-controls={open ? 'split-button-menu' : undefined}
          // aria-expanded={open ? 'true' : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          // onClick={handleToggle}
          sx={{
            p: '1rem',
            display: 'flex',
            direction: 'row',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: '1px solid white',
            '&:hover': {
              background: 'transparent',
            },
            borderRadius: '0.625rem',
            boxShadow: 'none',
          }}
          disableFocusRipple
          disableTouchRipple
          disableRipple
        >
          <div className='flex items-center justify-center'>
            <img src={companyLogo} className='h-[2rem]' />
          </div>
          <Icon icon={'radix-icons:chevron-down'} className='size-[1.5rem]' />
        </Button>
      </ButtonGroup>
      {/* <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
    </React.Fragment>
  );
}

const AppBarProfile = () => {
  return (
    <Stack direction={'row'} gap={'0.5rem'} pr={'3rem'}>
      <Avatar src={avatarImage} className='size-[2.75rem]'>
        J
      </Avatar>
      <Stack direction={'column'}>
        <Typography
          fontFamily={'Open Sans'}
          fontSize={'1rem'}
          fontWeight={'700'}
        >
          Jerry
        </Typography>
        <Typography fontFamily={'Open Sans'} fontSize={'0.9rem'}>
          Admin
        </Typography>
      </Stack>
    </Stack>
  );
};
