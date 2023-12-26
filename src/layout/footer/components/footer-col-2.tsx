import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { FOOTER_DATA } from './constants';
import eclipse from '../../../assets/images/eclipse.png';

const FooterCol2 = () => {
  const data = FOOTER_DATA.slice(0, 4);
  return (
    <Box className="my-6">
      {data.map((item) => (
        <Box key={item.link} className="flex justify-start items-center gap-2">
          <img src={eclipse} alt="" className="w-3" />
          <Link to={item.link}>
            <Typography className="!font-bold !my-2">{item.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default FooterCol2;
