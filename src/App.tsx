import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Stack } from '@mui/material';

function App() {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        className='w-full h-screen'
        // height={'100vh'}
        // width={'100%'}
      >
        <div>Mui + Tailwind</div>
      </Stack>
    </>
  );
}

export default App;
