import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to={'/'}>홈</Link>
      <Link to={'/movie'}>영화</Link>
      <Link to={'/cart'}>카트</Link>
      <Link to={'doublenav/weather/Seoul'}>날씨</Link>
    </div>
  );
};

export default Navbar;
