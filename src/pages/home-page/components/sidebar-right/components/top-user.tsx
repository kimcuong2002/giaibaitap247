import { useMemo } from 'react';

import { Box, Typography } from '@mui/material';

import { Button } from '@/components';
import { useScoreBoardQuery } from '@/hooks';

const TopUser = () => {
  const { data } = useScoreBoardQuery();

  const topUser = useMemo(() => {
    const topUsers = data?.results.slice(0, 5);
    return topUsers;
  }, [data]);
  return (
    <Box className="bg-white rounded-xl p-8 flex flex-col items-center">
      <Typography className="underline text-[#39C0ED] !text-xl !font-bold">
        Top thành viên hăng hái nhất
      </Typography>
      <hr className="my-4" />
      <Button buttonName="Trong ngày" />
      {data &&
        topUser?.map((item) => (
          <Box key={item._id} className="flex justify-between w-full my-3">
            {item.idUser.avatar ? (
              <img
                src={item.idUser.avatar}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            ) : (
              'avata'
            )}

            <Typography className="text-[#DBA369]">{item.score}</Typography>
          </Box>
        ))}
    </Box>
  );
};

export default TopUser;
