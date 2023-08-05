import React from 'react';
import { Outlet } from 'react-router';

const DefaultLayout = () => {
  return (
    <div>
      <hr />
      <hr />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
