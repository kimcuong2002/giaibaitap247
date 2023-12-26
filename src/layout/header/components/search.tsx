import { Box, Typography } from '@mui/material';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <Box className="flex bg-[#F6F6F7] rounded-md justify-between items-center h-7 w-40 md:w-1/3 md:h-10 xl:w-[611px]">
      <input
        type="text"
        placeholder="Tìm kiếm ?"
        className="bg-[#F6F6F7] rounded-md w-full pl-2 outline-none lg:w-96"
      />
      <Typography className="hidden xl:flex w-24 bg-[#39C0ED] text-white justify-center items-center rounded-md px-2 cursor-pointer h-full">
        Tìm kiếm
      </Typography>
      <BsSearch className="cursor-pointer h-full w-10 p-1 rounded-md bg-[#39C0ED] text-white md:w-14 md:p-3 xl:hidden" />
    </Box>
  );
};

export default Search;
