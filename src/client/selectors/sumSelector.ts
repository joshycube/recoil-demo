import { selector } from "recoil";

import { cartState } from "../atoms/CartAtom";

export const sumSelector = selector({
  key: "SumSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});
