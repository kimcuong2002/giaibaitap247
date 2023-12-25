import { FC } from 'react';

import { Typography } from '@mui/material';

type Props = {
  buttonName: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ buttonName, onClick }) => {
  return (
    <button onClick={onClick} className="bg-[#39C0ED] py-2 px-4 rounded-md">
      <Typography className="!font-bold">{buttonName}</Typography>
    </button>
  );
};

export default Button;
