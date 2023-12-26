import { Box } from '@mui/material';

import AddQuestion from './components/add-question';
import GiftBox from './components/gift-box';
import ListQuestion from './components/list-question';
import { Button } from '@/components';

const MainHome = () => {
  return (
    <Box>
      <AddQuestion />
      <GiftBox />
      <Button
        buttonName="+40 câu hỏi mới nhất"
        className="bg-[#DBA369] w-full my-4 h-14"
      />
      <ListQuestion />
    </Box>
  );
};

export default MainHome;
