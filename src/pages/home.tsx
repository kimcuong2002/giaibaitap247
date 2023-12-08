import { Box } from '@mui/material';

import { useSubjectQuery } from '../feature/hooks/use-subject-store';

const HomePage = () => {
  const { data } = useSubjectQuery();
  console.log(data);
  return <Box>HomePage</Box>;
};

export default HomePage;
