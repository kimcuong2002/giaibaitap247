import { Box, Typography } from '@mui/material';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { TiLocationOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import { FOOTER_DATA, LOCATION } from './constants';
import earth from '../../../assets/images/earth.png';
import eclipse from '../../../assets/images/eclipse.png';

const FooterCol3 = () => {
  const data = FOOTER_DATA.slice(4);
  return (
    <Box>
      {data.map((item) => (
        <Box key={item.link} className="flex justify-start items-center gap-2">
          <img src={eclipse} alt="" className="w-3" />
          <Link to="item.link">
            <Typography className="!font-bold !my-2">{item.name}</Typography>
          </Link>
        </Box>
      ))}
      <Box className="flex gap-6 mt-2">
        <img src={earth} alt="" className="w-6" />
        <Link to="">
          <Typography>https://izisoft.io</Typography>
        </Link>
      </Box>
      <Box className="flex gap-5 mt-4">
        <PiFacebookLogoBold className="!text-3xl opacity-90" />
        <Link to="">
          <Typography>https://www.facebook.com/izisoft.io</Typography>
        </Link>
      </Box>
      <Box className="flex mt-4 gap-4 ">
        <TiLocationOutline className="text-4xl" />
        <Box>
          {LOCATION.map((item) => (
            <Box
              key={item.name}
              className="flex gap-2 justify-center items-start"
            >
              <img src={eclipse} alt="" className="w-3 h-3 mt-1" />
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterCol3;
