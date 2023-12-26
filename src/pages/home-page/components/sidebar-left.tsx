import { useEffect, useMemo } from 'react';

import { Box, Typography } from '@mui/material';
import toast from 'react-hot-toast';

import { menu } from '../../../assets/index';
import { Subjects } from '@/constants/common';
import { useSubjectsQuery } from '@/hooks';
import { SubjectType } from '@/ts/types';

const SideBarLeft = () => {
  const { data, error } = useSubjectsQuery();

  const subjects = useMemo(() => {
    if (data) {
      return data.map((item: SubjectType) => ({
        ...item,
        icon: Subjects[item.position].icon,
      }));
    }

    return [];
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <Box className="h-[80vh] flex flex-col justify-center items-center bg-white py-4 rounded-xl">
      <button className="w-52 h-14 flex justify-start items-center rounded-xl pl-8 gap-3 hover:bg-[#CC8B8B]">
        <img src={menu} alt="" />
        <Typography className="text-[#242220] opacity-50 group-hover:!opacity-100">
          Tất cả
        </Typography>
      </button>
      {subjects &&
        subjects.map((item) => (
          <button
            key={item.slug}
            className="w-52 h-14 flex justify-start items-center rounded-xl pl-8 gap-3 hover:bg-[#CC8B8B] group active:bg-violet-700"
          >
            <img src={item.icon} alt="" />
            <Typography className="text-[#242220] opacity-50 group-hover:!opacity-100">
              {item.title}
            </Typography>
          </button>
        ))}
    </Box>
  );
};

export default SideBarLeft;
