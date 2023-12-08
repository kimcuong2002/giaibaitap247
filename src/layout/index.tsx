import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import FooterComponent from './footer';
import HeaderComponent from './header';

const LayoutComponent = () => {
  return (
    <Box>
      <HeaderComponent />
      <Box className="flex justify-center items-center">
        <Outlet />
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default LayoutComponent;
