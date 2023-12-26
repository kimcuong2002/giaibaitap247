import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import FooterComponent from './footer';
import HeaderComponent from './header';

const LayoutComponent = () => {
  return (
    <Box>
      <Box className="shadow-xl">
        <HeaderComponent />
      </Box>
      <Box className="bg-[#F6F6F7]">
        <Box className="flex justify-center items-center px-4 lg:mx-9 py-10">
          <Outlet />
        </Box>
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default LayoutComponent;
