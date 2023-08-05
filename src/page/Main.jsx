import React from 'react';
// import { dummy } from '../model/dummy';
// import ProductCard from '../component/ProductCard/ProductCard';
import Cart from './Cart';

const Main = () => {
  return (
    <>
      {' '}
      {
        <Cart />
        // dummy.results.map((item) => {
        //   return (
        //     <li key={item.id}>
        //       <ProductCard data={item} />
        //     </li>
        //   );
        // })
      }
    </>
  );
};

export default Main;
