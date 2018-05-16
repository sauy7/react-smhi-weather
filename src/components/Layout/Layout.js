import React from 'react';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Layout = (props) => {
  return (
    <React.Fragment>
      <main>
        {props.children}
      </main>
      <BottomNavigation />
    </React.Fragment>
  );
};

export default Layout;
