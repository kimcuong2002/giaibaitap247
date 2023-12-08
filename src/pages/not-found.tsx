import { Box, Button } from '@mui/material';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

import notFoundAnimation from '../lottiefiles/notfound.json';

const NotFound = () => {
  const notFound = notFoundAnimation;
  return (
    <Box className="w-full h-screen flex flex-col justify-center items-center">
      <Box className="h-96 w-96">
        {notFound && (
          <Lottie animationData={notFound} loop={true} autoplay={true} />
        )}
      </Box>
      <Link to="/">
        <Button variant="outlined">Home</Button>
      </Link>
    </Box>
  );
};

export default NotFound;
