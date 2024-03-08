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
