import React from 'react';
import { useRecoilValue } from 'recoil';
import { CarItemAtom } from '../recoil/CarItemAtom';

const Cart = () => {
  // 전역상태관리소의 값을 불러오기
  // 파생데이터인 셀렉터를 이용

  const carItem = useRecoilValue(CarItemAtom);

  return <div>{carItem}</div>;
};

export default Cart;
