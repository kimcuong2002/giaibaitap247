import { Box, Typography } from '@mui/material';

import { logo, question1, question2 } from '@/assets';
import { Button } from '@/components';

const AddQuestion = () => {
  return (
    <Box className="flex justify-between !rounded-xl bg-white p-8 pr-6 lg:pr-28">
      <Box className="flex gap-4">
        <img src={logo} alt="" className="w-9 h-7" />
        <Box className="flex flex-col gap-6">
          <Typography className="text-[#242220] opacity-50">
            Cái gì khó - Đã có Izi
          </Typography>
          <Typography className="text-[#CCCCCC] !font-bold !text-xl">
            Bạn muốn biết thêm kiến thức gì?
          </Typography>
          <Box className="relative">
            <img
              src={question2}
              alt=""
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14"
            />
            <Button buttonName="Đặt câu hỏi" />
          </Box>
        </Box>
      </Box>
      <img src={question1} alt="" className="w-36 h-36" />
    </Box>
  );
};

export default AddQuestion;
