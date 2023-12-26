import { Grid } from '@mui/material';

import MainHome from './components/main-home';
import SideBarLeft from './components/sidebar-left';
import SideBarRight from './components/sidebar-right';

const HomePage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={0} md={3} lg={3} xl={2} className="hidden xl:block">
        <SideBarLeft />
      </Grid>
      <Grid item xs={12} md={12} lg={9} xl={7}>
        <MainHome />
      </Grid>
      <Grid item xs={0} lg={0} xl={3} className="hidden 2xl:block">
        <SideBarRight />
      </Grid>
    </Grid>
  );
};

export default HomePage;
