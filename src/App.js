/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { spacing } from './style/ui';
// import * as color from './style/color';
// import * as screen from './style/media-query';

import Weather from './page/Weather';
import Main from './page/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './component/MovieList/MovieList';
import NavbarLayout from './component/Layout/NavbarLayout';
import DefaultLayout from './component/Layout/DefaultLayout';
import GlobalStyle from './style/GlobalStyle';
import Cart from './page/Cart';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavbarLayout />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/movie" element={<MovieList />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route element={<NavbarLayout />} path="doublenav">
            <Route path="weather/:locationId" element={<Weather />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// const reset = () => {
//   // 객체형으로 전달
//   return css({
//     border: '12px solid #000',
//     margin: '0',
//   });
// };
// const wrap = () => {
//   // 문자형으로 전달
//   return css`
//     color: ${color.brand};

//     ${screen.large} {
//       ${spacing.mg(3)}
//     }
//     ${screen.medium} {
//       ${spacing.mg(2)}
//     }
//     ${screen.small} {
//       ${spacing.mg(1)}
//     }
//   `;
// };

export default App;
