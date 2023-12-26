import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { FOOTER_TEXT_DES } from './constants';
import app_store from '../../../assets/images/app_store.png';
import be from '../../../assets/images/be-logo.png';
import entypo from '../../../assets/images/entypo.svg';
import facebook from '../../../assets/images/facebook.svg';
import google from '../../../assets/images/google_play.png';
import logo from '../../../assets/images/logo.png';

const FooterCol1 = () => {
  return (
    <Box className="flex flex-col justify-start items-start">
      <Box className="flex justify-center items-center">
        <img src={logo} alt="" className="w-24" />
        <Typography className="!font-bold !text-2xl">Giaibaitap247</Typography>
      </Box>
      <Typography className="!my-4">{FOOTER_TEXT_DES}</Typography>
      <Box className="flex gap-8 mb-4">
        <Link to="">
          <img src={be} alt="" className="!w-9 !h-9" />
        </Link>
        <Link to="">
          <img src={entypo} alt="" className="!w-9 !h-9" />
        </Link>
        <Link to="">
          <img src={facebook} alt="" className="!w-9 !h-9" />
        </Link>
      </Box>
      <Typography className="!font-bold">Tải ứng dụng</Typography>
      <Box className="flex gap-4 mt-2">
        <Link to="">
          <img src={app_store} alt="" />
        </Link>
        <Link to="">
          <img src={google} alt="" />
        </Link>
      </Box>
    </Box>
  );
};

export default FooterCol1;
