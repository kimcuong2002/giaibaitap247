import { Box, Grid, Typography } from '@mui/material';

import FooterCol1 from './components/footer-col-1';
import FooterCol2 from './components/footer-col-2';
import FooterCol3 from './components/footer-col-3';

const FooterComponent = () => {
  return (
    <Box className="bg-[#39C0ED] text-white">
      <Box className="py-16 mx-6 lg:mx-9">
        <Grid container>
          <Grid item xs={12} md={12} lg={4}>
            <FooterCol1 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FooterCol2 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FooterCol3 />
          </Grid>
          <Box className="flex justify-center items-center w-full gap-20 mt-20">
            <Typography className="!font-bold">Copyright</Typography>
            <Typography className="!font-bold">
              2020 All rights Reserved. Null
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default FooterComponent;
