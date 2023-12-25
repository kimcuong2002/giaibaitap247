import { Box, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { profile, chat, edit_profile, log_out } from '@/assets';

const actions = [
  {
    icon: profile,
    name: 'Trang cá nhân',
    link: '/profile',
  },
  {
    icon: chat,
    name: 'Câu hỏi đã lưu',
  },
  {
    icon: edit_profile,
    name: 'Chỉnh sửa trang cá nhân',
  },
  {
    icon: log_out,
    name: 'Đăng xuất',
  },
];

const ActionProfile = () => {
  return (
    <Box className="px-4">
      {actions.map((item) => (
        <Link key={item.name} to={item.link as string}>
          <Box className="flex items-center gap-6 my-3 cursor-pointer border-b-2 pb-2">
            <img src={item.icon} alt="" className="w-6" />
            <Typography>{item.name}</Typography>
            <Divider className="!mt-4" />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ActionProfile;
