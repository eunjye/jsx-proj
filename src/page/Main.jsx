/** @jsxImportSource @emotion/react */
import React from 'react';
import ProductCard from '../component/ProductCard/ProductCard';
import { css } from '@emotion/react';
import useDummyResults from '../hook/useDummyData';

const cssBoxItem = () => {
  return css({
    border: '1px solid #444',
    padding: '20px',
    margin: '10px',
  });
};
const ListItem = ({ item }) => (
  <li css={cssBoxItem}>
    <ProductCard data={item} />
  </li>
);


const Main = () => {
  // 데이터 처리는 별도의 훅 또는 함수로 분리
  const arrResult = useDummyResults(); // 예시

  return (
    <ul>
      {arrResult && arrResult.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  );
};

export default Main;
