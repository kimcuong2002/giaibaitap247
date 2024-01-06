import { useState } from 'react';

import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import { TbSend } from 'react-icons/tb';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Question: React.FC = () => {
  const [value, setValue] = useState('');
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],

    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['bold', 'italic'],
    ['link', 'image'],
    ['clean'],
  ];
  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <Grid container spacing={20} className="!text-black !mx-6 ">
      <Grid item lg={4}>
        <Typography className="!font-bold !text-2xl">Câu hỏi</Typography>
        <Box className="flex items-center my-4 gap-2">
          <Avatar className="w-10 h-10" />
          <Typography className="!font-bold">Toan hoc</Typography>
          <Typography className="!font-bold">. Lop 10 </Typography>
          <Typography className="text-gray-500"> 20 phut truoc</Typography>
        </Box>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          facere libero quasi nostrum consequuntur voluptatum id veritatis
          tempore eum suscipit, quis quibusdam nulla qui modi sunt sapiente
          aspernatur odit animi!
        </Typography>
      </Grid>
      <Grid item lg={8}>
        <Typography className="text-[#DBA369] !mb-4">
          Trả lời ngay để nhận điểm nhé
        </Typography>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={module}
        />
        <Box className="w-full flex justify-center items-center">
          <Button
            variant="contained"
            disableElevation
            className="!mt-4 text-center"
          >
            <TbSend />
            Gửi câu trả lời
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Question;
