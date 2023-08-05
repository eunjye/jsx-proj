/** @jsxImportSource @emotion/react */
import React from 'react';
import { dummy } from '../model/dummy';
import ProductCard from '../component/ProductCard/ProductCard';
import { css } from '@emotion/react';

const arrResult = dummy.results;
const cssBoxItem = () => {
  return css({
    border: '1px solid #444',
    padding: '20px',
    margin: '10px',
  });
};
const Main = () => {
  return (
    <ul>
      {!!arrResult &&
        arrResult.map((item) => {
          return (
            <li key={item.id} css={cssBoxItem}>
              <ProductCard data={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default Main;
