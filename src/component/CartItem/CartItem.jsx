import React from 'react';
import CustomButton from '../atom/CustomButton';
import { useSetRecoilState } from 'recoil';
import { CartItemAtom } from '../../recoil/atom/CartItemAtom';


const CartItem = ({ data }) => {
  const { id, title, vote_average } = data;
  const setCartItem = useSetRecoilState(CartItemAtom);

  const handlerRemoveBtn = () => {
    setCartItem((prev) => [...prev].filter((item)=>item.id !== id));
  }

  return (
    <li>
      {id}, {title}, {vote_average}
      <CustomButton onPress={handlerRemoveBtn}>
        삭제하기
      </CustomButton>
    </li>
  );
};

export default CartItem;
