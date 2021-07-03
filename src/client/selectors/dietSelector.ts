import { selector } from "recoil";

import { IMenuItem } from "../shared/types";
import { cartState } from "../atoms/CartAtom";
interface IDietSummary {
  [key: string]: number;
}

export const dietSelector = selector({
  key: "DietSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    const dietarySum: IDietSummary = {
      v: 0,
      ve: 0,
      "n!": 0,
      df: 0,
      gf: 0,
      rsf: 0,
    };

    cart.map((cartItem: IMenuItem) => {
      return cartItem.dietaries.map((dietItem: string) => {
        dietarySum[dietItem] += 1;
      });
    });

    return dietarySum;
  },
});
