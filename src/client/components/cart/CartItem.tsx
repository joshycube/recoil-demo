import * as React from "react";
import { useSetRecoilState } from "recoil";

import { cartState } from "../../atoms/CartAtom";
import { IMenuItem } from "../../shared/types";

interface Props {
  cartItem: IMenuItem;
}

function CartItem({ cartItem }: Props) {
  const setCartItems = useSetRecoilState(cartState);

  const removeItem = (id: number) => {
    setCartItems((prevItems: IMenuItem[]) =>
      prevItems.filter((item: IMenuItem) => item.id !== id)
    );
  };

  return (
    <li data-test-id="cart-item" className="item">
      <h2>{cartItem.name}</h2>
      <p>
        {cartItem.dietaries.map((dietary: string) => (
          <span key={dietary} className="dietary">
            {dietary}
          </span>
        ))}
      </p>
      <button
        data-test-id="btn-remove-item"
        onClick={() => removeItem(cartItem.id)}
        className="remove-item"
      >
        x
      </button>
    </li>
  );
}

export default CartItem;
