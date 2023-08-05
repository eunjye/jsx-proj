import React from 'react';
import { useRecoilValue } from 'recoil';
import { AverageScoreSelector, CartItemAtom, TotalQuantitySelector } from '../recoil/CartItemAtom';
import CartItem from '../component/CartItem/CartItem';

const Cart = () => {
  // 전역상태관리소의 값을 불러오기
  // 파생데이터인 셀렉터를 이용
  const cartItem = useRecoilValue(CartItemAtom);
  const totalQuantity = useRecoilValue(TotalQuantitySelector);
  const averageScore = useRecoilValue(AverageScoreSelector);

  return (
    <div>
      <h1>장바구니</h1>
      {cartItem.length < 1 ? (
        <div>장바구니가 비어있습니다.</div>
      ) : (
        <ul>
          {!!cartItem &&
            cartItem.map((item) => {
              return <CartItem data={item} key={item.id} />;
            })}
        </ul>
      )}
      <div>총 개수 : {totalQuantity}</div>
      <div>평균 평점 : {averageScore}</div>
    </div>
  );
};

export default Cart;
