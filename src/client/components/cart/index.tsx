import * as React from "react";
import { useRecoilValue } from "recoil";

import { cartState } from "../../atoms/CartAtom";
import { IMenuItem } from "../../shared/types";
import CartItem from "./CartItem";

function Cart() {
  const cartItems: IMenuItem[] = useRecoilValue(cartState);

  return (
    <>
      <h2>Menu preview</h2>

      {!cartItems.length && <div>Please select items from the left</div>}

      {cartItems && (
        <ul className="menu-preview">
          {cartItems.map((cartItem: IMenuItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Cart;
