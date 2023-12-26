import { Box } from '@mui/material';

import Event from './components/event';
import TopUser from './components/top-user';
import { Profile } from '@/components';

const SideBarRight = () => {
  return (
    <Box className="flex flex-col gap-4">
      <Profile />
      <Event />
      <TopUser />
    </Box>
  );
};

export default SideBarRight;
