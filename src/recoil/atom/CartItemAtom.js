import { atom, selector } from 'recoil';

export const CartItemAtom = atom({
  key: 'CartItemAtom',
  default: [],
});

export const TotalQuantitySelector = selector({
  key: 'TotalQuantitySelector',
  get: ({ get }) => {
    const CarItem = get(CartItemAtom);
    return CarItem.length;
  },
});

export const AverageScoreSelector = selector({
  key: 'AverageScoreSelector',
  get: ({ get }) => {
    const CarItem = get(CartItemAtom);
    const CarItemLength = CarItem.length;
    if (CarItemLength < 1) {
      return 0;
    }
    var total = CarItem.reduce((acc, curr) => {
      return acc + curr.vote_average;
    }, 0);
    return total / CarItemLength;
  },
});
