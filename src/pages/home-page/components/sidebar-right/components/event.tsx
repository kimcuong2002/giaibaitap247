import { Box, Typography } from '@mui/material';
import { GrFormNextLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import { flag } from '@/assets';

const eventDatas = [
  {
    eventName: 'Đua top cuộc thi tài năng',
    link: '',
  },
  {
    eventName: 'Nhận giải tháng 8 - Đón trung thu vui rước đèn',
    link: '',
  },
];

const Event = () => {
  return (
    <Box className="bg-white rounded-xl p-8">
      <Box className="flex justify-between items-center">
        <Box></Box>
        <Typography className="text-black !font-bold !text-2xl">
          Sự kiện
        </Typography>
        <Box className="w-8 h-8 shadow-xl flex justify-center items-center rounded-full cursor-pointer">
          <GrFormNextLink className="text-[#39C0ED] !text-xl" />
        </Box>
      </Box>
      <hr className="my-6" />
      {eventDatas.map((item) => (
        <Box className="flex gap-4 items-center mb-4" key={item.eventName}>
          <img
            src={flag}
            alt=""
            className="border-2 rounded-full border-none p-2 bg-[#05ABE2] bg-opacity-10"
          />
          <Link to={item.link}>
            <Typography className="text-[#39C0ED] ">
              {item.eventName}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Event;
