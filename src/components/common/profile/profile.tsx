import { Box, Skeleton, Typography } from '@mui/material';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import ActionProfile from '../action-profile/action-profile';
import { handle, medal1, rank2 } from '@/assets';
import { ButtonTheme } from '@/components';
import { useUserQuery } from '@/hooks';

const Profile = () => {
  const { data } = useUserQuery();

  return (
    <Box className="w-full p-8 bg-white rounded-xl text-black">
      <Box className="flex justify-between">
        <Box className="w-10/12">
          <Box className="flex gap-3">
            {data ? (
              <img src={data?.avatar} alt="" className="w-11 h-11 rounded-lg" />
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
            <Box>
              <Typography className="!font-bold ">{data?.fullName}</Typography>
              <Box className="flex justify-center items-center gap-2">
                <img src={handle} alt="" className="w-4 h-4" />
                <Typography className="!text-[#4EB845] !font-bold">
                  Lính mới
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="flex items-center my-3">
            <Typography className="w-2/3">Trả lời hay nhất</Typography>
            <Box className="flex justify-center items-center gap-2 !font-bold">
              {data?.totalBestAnswers}{' '}
              <img src={medal1} alt="" className="w-4 h-4" />
            </Box>
          </Box>
          <Box className="flex items-center my-3">
            <Typography className="w-2/3">Điểm</Typography>
            <Box className="flex justify-center items-center gap-2 !font-bold">
              {data?.totalScore}
              <Typography className="!font-bold">điểm</Typography>
            </Box>
          </Box>
          <Box className="flex items-center my-3">
            <Typography className="w-2/3">
              Cần thêm{' '}
              <span className="text-[#8DC354] !font-bold">30 điểm</span> để
              thăng hạng lên:
            </Typography>
            <Box className="flex gap-2">
              <img src={rank2} alt="" />
              <Typography className="text-[#99C23B]">Quan tâm</Typography>
            </Box>
          </Box>
          <Box className="flex items-center my-3">
            <Typography className="w-2/3">Giao diện tối </Typography>
            <ButtonTheme />
          </Box>
        </Box>
        <Link to="/">
          <Box className="border-2 border-[#B1B1B1] text-[#B1B1B1] w-8 h-6 rounded-md flex justify-center items-center cursor-pointer lg:hidden">
            <GrLinkNext />
          </Box>
        </Link>
      </Box>
      <Box className="lg:hidden">
        <ActionProfile />
      </Box>
    </Box>
  );
};

export default Profile;
