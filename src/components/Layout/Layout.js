import React, {Fragment} from 'react';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <main>
        {props.children}
      </main>
      <BottomNavigation />
    </Fragment>
  );
};

export default Layout;
