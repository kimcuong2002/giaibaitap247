import React from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { IoIosArrowDown } from 'react-icons/io';

import { ActionProfile } from '@/components';
import { useUserQuery } from '@/hooks';

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data } = useUserQuery();

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box className="flex justify-between items-center gap-2 bg-[#F1F1F1] rounded-full lg:w-36 lg:pr-1 cursor-pointer">
          <Avatar alt="Remy Sharp" src={data?.avatar} className="!h-8 !w-8" />
          <Typography className="!text-[#6D6D6D] !text-xs hidden lg:block">
            {data?.fullName}
          </Typography>
          <IoIosArrowDown className="!text-xl hidden lg:block" />
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <ActionProfile />
      </Menu>
    </Box>
  );
};

export default Profile;
