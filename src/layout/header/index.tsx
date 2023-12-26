import { Box } from '@mui/material';
import {
  IoGiftOutline,
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
} from 'react-icons/io5';

import Logo from './components/logo';
import Profile from './components/profile';
import Search from './components/search';

const HeaderComponent = () => {
  return (
    <Box className="flex justify-between items-center gap-2 py-4 px-4 lg:mx-9">
      <Logo />
      <Search />
      <Box className="flex justify-center items-center gap-2 text-3xl lg:gap-8 !text-[#39C0ED]">
        <IoGiftOutline className="!text-[#DBA369] cursor-pointer" />
        <IoChatbubbleEllipsesOutline className="cursor-pointer" />
        <IoNotificationsOutline className="cursor-pointer" />
        <Profile />
      </Box>
    </Box>
  );
};

export default HeaderComponent;
