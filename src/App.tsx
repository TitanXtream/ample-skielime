import { Button, Stack, Typography } from '@mui/material';
import { MainLayout, TabsGroup } from './components';
import { Icon } from '@iconify/react/dist/iconify.js';

function App() {
  return (
    <MainLayout>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        columnGap={'1rem'}
        alignItems={{ md: 'center', xs: 'start' }}
        justifyContent={'space-between'}
        width={'100%'}
        py={'1.25rem'}
        gap={'1rem'}
      >
        <Stack direction={'row'} columnGap={'1rem'} alignItems={'center'}>
          <Typography variant='h4' fontWeight={700}>
            Job postings
          </Typography>
          <Stack
            sx={({ palette }) => ({
              background: palette.primary[50],
              color: palette.primary[600],
            })}
            height='1.5rem'
            width='1.5rem'
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'50%'}
          >
            <Typography fontSize={'0.75rem'} fontWeight={600}>
              8
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant='contained'
          startIcon={
            <Icon icon={'gridicons:add-outline'} className='size-[1.25rem]' />
          }
          className='font-semibold'
        >
          New job posting
        </Button>
      </Stack>
      <TabsGroup />
    </MainLayout>
  );
}

export default App;
