import { Icon } from '@iconify/react/dist/iconify.js';
import { Paper, Stack, Typography, useTheme } from '@mui/material';

const JobPostCard = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        boxShadow: '0 4px 30px 0 #2E384710',
        borderRadius: '0.75rem',
      }}
    >
      <Stack direction={'column'} gap={'1rem'} p={'1.5rem'}>
        <HeaderPart />
        <CentralPart />
        <BottomPart />
      </Stack>
    </Paper>
  );
};

export default JobPostCard;

const HeaderPart = () => {
  const { palette } = useTheme();

  return (
    <Stack direction={'column'} gap={'0.5rem'}>
      <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
        <Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
          <Icon
            icon={'system-uicons:checkbox-empty'}
            className='text-brand_gray-300 size-[1.2rem]'
          />
          <Typography
            fontWeight={600}
            fontSize={'0.75rem'}
            color={palette.brand_gray[400]}
            textTransform={'uppercase'}
          >
            DESIGN
          </Typography>
        </Stack>
        <Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
          <Typography
            fontWeight={600}
            fontSize={'0.75rem'}
            color={palette.brand_gray[400]}
          >
            1 day ago
          </Typography>
          <Icon
            icon={'mi:options-horizontal'}
            className='text-brand_gray-600 size-[1.2rem]'
          />
        </Stack>
      </Stack>
      <Typography
        fontSize={'1.125rem'}
        fontWeight={600}
        color={palette.brand_gray[800]}
      >
        Senior Product Designer
      </Typography>
    </Stack>
  );
};

const CentralPart = () => {
  const { palette } = useTheme();
  return (
    <Stack direction={'column'} gap={'0.25rem'} width={'100%'}>
      <Typography
        color={palette.brand_gray[500]}
        fontWeight={600}
        fontSize={'0.75rem'}
        // className='font-medium'
      >
        Candidates:
      </Typography>
      <Stack
        direction={'row'}
        px={'1rem'}
        py={'0.75rem'}
        justifyContent={'space-between'}
        sx={{
          background: '#F3F8FC',
        }}
      >
        <DataBox borderLeftColor={'#667085'} label='Total' value={230} />
        <DataBox borderLeftColor='#12B76A' label='NEW' value={12} />
        <DataBox borderLeftColor='#FF5759' label='BEST FIT' value={2} />
      </Stack>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        mt={'1rem'}
        divider={
          <div className='w-[0.5px] h-[0.8rem] bg-brand_gray-300 m-auto'></div>
        }
        // className='bg-red-500'
      >
        <RedBadge />
        <Stack direction={'row'} gap={'0.5rem'}>
          <BlueBadge label={'Full time'} />
          <BlueBadge label='in person' />
        </Stack>
      </Stack>
    </Stack>
  );
};

const BottomPart = () => {
  const { palette } = useTheme();

  return (
    <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
      <Stack direction={'row'} gap={'0.625rem'} alignItems={'center'}>
        <Icon
          icon={'lucide:map-pin'}
          className='text-brand_gray-500 size-[1.2rem]'
        />
        <Typography
          fontWeight={600}
          fontSize={'0.75rem'}
          color={palette.brand_gray[500]}
        >
          New York
        </Typography>
      </Stack>
      <Stack direction={'row'} gap={'0.625rem'} alignItems={'center'}>
        <Typography
          fontWeight={600}
          fontSize={'0.75rem'}
          color={palette.brand_gray[500]}
        >
          See details
        </Typography>
        <Icon
          icon={'mdi:chevron-right'}
          className='text-brand_gray-600 size-[1.2rem]'
        />
      </Stack>
    </Stack>
  );
};

type DataBoxProps = {
  borderLeftColor: string;
  label: string;
  value: number;
};
const DataBox = ({ borderLeftColor, label, value }: DataBoxProps) => {
  return (
    <Stack
      direction={'column'}
      sx={{
        borderLeft: '2px solid',
        borderLeftColor,
        // borderLeftColor: theme.palette.brand_gray[500],
        pl: '0.5rem',
      }}
    >
      <Typography
        sx={(theme) => ({
          textTransform: 'uppercase',
          color: theme.palette.brand_gray[500],
          fontWeight: 600,
        })}
      >
        {label}
      </Typography>
      <Typography
        fontSize={'1.25rem'}
        fontWeight={600}
        sx={(theme) => ({
          color: theme.palette.brand_gray[700],
        })}
      >
        {value}
      </Typography>
    </Stack>
  );
};

const RedBadge = () => {
  return (
    <Stack
      sx={({ palette }) => ({
        background: palette.primary[50],
        color: palette.primary[600],
      })}
      px={'0.5rem'}
      py={'0.125rem'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'1rem'}
    >
      <Typography fontSize={'0.75rem'} fontWeight={600}>
        Level 3
      </Typography>
    </Stack>
  );
};

type BlueBadgeProps = {
  label: string;
};

const BlueBadge = ({ label }: BlueBadgeProps) => {
  return (
    <Stack
      sx={({ palette }) => ({
        background: palette.brand_blue[50],
        color: palette.brand_blue[700],
      })}
      px={'0.5rem'}
      py={'0.125rem'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'1rem'}
    >
      <Typography fontSize={'0.75rem'} fontWeight={600}>
        {label}
      </Typography>
    </Stack>
  );
};
