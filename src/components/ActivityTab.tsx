import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Paper, Stack, Typography } from '@mui/material';

const ActivityTab = () => {
  return (
    <Stack direction={'column'} width={'100%'} gap={'1.5rem'}>
      <JobSearchBar />
    </Stack>
  );
};

export default ActivityTab;

const JobSearchBar = () => {
  return (
    <Paper
      sx={{
        py: '0.5rem',
        borderRadius: '0.5rem',
      }}
    >
      <Stack px={'0.5rem'} direction={'row'} justifyContent={'space-between'}>
        <Stack direction={'row'} gap={'0.75rem'} alignItems={'center'}>
          <Icon icon={'oui:search'} className='text-gray-500 size-[1rem]' />
          <Typography className='text-[0.9rem]'>
            Search for a job posting title
          </Typography>
        </Stack>
        <Stack direction={'row'} gap={'1.5rem'}>
          <Button
            startIcon={<Icon icon={'uil:calender'} />}
            sx={(theme) => ({
              color: theme.palette.brand_gray[500],
              border: '2px solid',
              borderColor: theme.palette.brand_gray[300],
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              px: '1rem',
              py: '0.5rem',
              textTransform: 'none',
            })}
            disableRipple
          >
            Select dates
          </Button>
          <Button
            startIcon={<Icon icon={'fluent:filter-16-filled'} />}
            sx={(theme) => ({
              color: theme.palette.brand_gray[700],
              border: '2px solid',
              borderColor: theme.palette.brand_gray.foundation,
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              px: '1rem',
              py: '0.5rem',
              textTransform: 'none',
            })}
            disableRipple
          >
            Filters
          </Button>
          <ButtonSelector />
        </Stack>
      </Stack>
    </Paper>
  );
};

const ButtonSelector = () => {
  return (
    <Stack
      direction={'row'}
      p={'2px'}
      className='bg-brand_gray-300 rounded-[0.5rem]'
    >
      <button className='text-[0.9rem] font-semibold px-[0.9rem] py-[0.5rem] text-brand_gray-700 bg-white border-0 outline-none rounded-[calc(0.5rem_-_2px)] cursor-pointer'>
        Profile view
      </button>
      <Typography className='flex items-center justify-center h-auto px-[0.9rem] py-[0.5rem] font-semibold text-[0.9rem] text-brand_gray-500'>
        List view
      </Typography>
    </Stack>
  );
};
