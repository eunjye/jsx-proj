/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRecoilState } from 'recoil';
import { CartItemAtom } from '../../recoil/CartItemAtom';
import { css } from '@emotion/react';
import CustomButton from '../atom/CustomButton';

const ProductCard = ({ data }) => {
  const { id, title, vote_average } = data;
  const [cartItem, setCartItem] = useRecoilState(CartItemAtom);

  // 현재 요소가 있는지 확인하는 방법 1
  const isAlreadyInCart = cartItem.filter((e) => e.id === id).length < 1 ? false : true; // 이미 카트 안에 들어있는지 확인

  const AddToCart = () => {
    // .push로 원본 배열을 훼손시키면, 다른곳에서도 사용하는 곳이 있을 경우 방해하게 되므로 원본배열은 절대 건드리지 않는 방법으로 개발
    setCartItem((prev) => [...prev, data]); // 이런식으로, 원본 배열을 가져와서 여기에 새로운 배열을 추가하는 방식으로 배열을 만듦
  };
  return (
    <div>
      <strong css={css(`color: red; font-weight: 700`)}>제목 : {title}</strong>
      <br />
      <div>평점 : {vote_average}</div>
      <CustomButton onPress={AddToCart} disabled={isAlreadyInCart}>
        장바구니에 담기
      </CustomButton>
    </div>
  );
};

export default ProductCard;
