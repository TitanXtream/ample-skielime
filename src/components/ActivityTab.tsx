import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { JobPostCard } from '.';

const ActivityTab = () => {
  return (
    <Stack direction={'column'} width={'100%'} gap={'1.5rem'}>
      <JobSearchBar />
      <JobPostingsList />
    </Stack>
  );
};

export default ActivityTab;

const JobSearchBar = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        py: '0.5rem',
        borderRadius: '0.5rem',
      }}
      elevation={0}
      className='@container'
    >
      <Stack
        px={'0.5rem'}
        direction={'row'}
        justifyContent={{ sm: 'space-between', xs: 'initial' }}
        gap={{ sm: '2rem', xs: '1rem' }}
      >
        <Stack
          direction={'row'}
          gap={'0.75rem'}
          alignItems={'center'}
          maxWidth={'40rem'}
          width={'100%'}
          minWidth={0}
        >
          <Icon
            icon={'oui:search'}
            className='text-gray-500 size-[1rem] ml-[0.5rem]'
          />
          <Typography className='text-[0.9rem] truncate min-w-0' flexShrink={2}>
            Search for a job posting title
          </Typography>
          <Button
            endIcon={<Icon icon={'icon-park:down'} />}
            sx={{
              px: '0.625rem',
              py: '0.5rem',
              textTransform: 'none',
              display: 'flex',

              ml: 'auto',
            }}
            disableRipple
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} flexShrink={0}>
              <Typography
                color={theme.palette.brand_gray[700]}
                fontSize={'0.9rem'}
              >
                Sort by:
              </Typography>
              <Typography
                color={theme.palette.brand_gray[800]}
                fontSize={'0.9rem'}
                fontWeight={600}
              >
                Date posted
              </Typography>
            </Stack>
          </Button>
        </Stack>
        <IconButton className='@[1200px]:hidden flex'>
          <Icon icon={'flowbite:bars-outline'} className='size-[1.5rem]' />
        </IconButton>
        <Stack
          direction={'row'}
          gap={'1.5rem'}
          flexShrink={0}
          className='@[1200px]:flex hidden'
        >
          <Button
            startIcon={<Icon icon={'uil:calender'} />}
            sx={{
              color: theme.palette.brand_gray[500],
              border: '2px solid',
              borderColor: theme.palette.brand_gray[300],
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              px: '1rem',
              py: '0.5rem',
              textTransform: 'none',
            }}
            disableRipple
          >
            Select dates
          </Button>
          <Button
            startIcon={<Icon icon={'fluent:filter-16-filled'} />}
            sx={{
              color: theme.palette.brand_gray[700],
              border: '2px solid',
              borderColor: theme.palette.brand_gray.foundation,
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              px: '1rem',
              py: '0.5rem',
              textTransform: 'none',
            }}
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

// const jobPostings = [{}];

const JobPostingsList = () => {
  return (
    <div className='grid gap-[1.5rem] auto-rows-auto grid-cols-[repeat(auto-fit,18.5rem)]'>
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
      <JobPostCard />
    </div>
  );
};
