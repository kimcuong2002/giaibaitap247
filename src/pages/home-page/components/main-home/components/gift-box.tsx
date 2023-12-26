import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { stop_watch, hand } from '@/assets';

const GiftBox = () => {
  return (
    <Box className="lg:flex justify-between items-center !rounded-xl bg-white p-8 mt-4">
      <Box className="flex items-center gap-4 mb-4 lg:mb-0">
        <img src={stop_watch} alt="" className="w-9 h-9" />
        <Typography className="text-[#242220]">
          Trả lời nhanh trong{' '}
          <span className="text-[#8DC354]">30 phút - Nhận thưởng </span>hấp dẫn
        </Typography>
      </Box>
      <Box className="flex gap-2">
        <img src={hand} alt="" className="w-4 h-4" />
        <Link to="" className="text-[#8DC354] underline">
          Xem chính sách thưởng
        </Link>
      </Box>
    </Box>
  );
};

export default GiftBox;
