import React, {Fragment} from 'react';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      {props.children}
      <BottomNavigation />
    </Fragment>
  );
};

export default Layout;
