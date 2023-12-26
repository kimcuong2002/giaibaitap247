import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { LOGO_TEXT } from './constants';
import logo from '../../../assets/images/logo.png';

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <Link to="/">
      <Box
        className={`cursor-pointer flex justify-center items-center ${className}`}
      >
        <img src={logo} alt="" className="w-10 lg:w-16" />
        <Typography className="!font-bold text-[#39C0ED] hidden xl:block">
          {LOGO_TEXT}
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
