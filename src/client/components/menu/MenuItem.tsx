import * as React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { cartState } from "../../atoms/CartAtom";
import { IMenuItem } from "../../shared/types";

interface Props {
  menuItem: IMenuItem;
}

function MenuItem({ menuItem }: Props) {
  const setCartItems = useSetRecoilState(cartState);
  const cartItems = useRecoilValue(cartState);

  const addItem = (item: IMenuItem) => {
    setCartItems((prevItems: IMenuItem[]) => [...prevItems, item]);
  };

  const isAdded = (id: number) =>
    !!cartItems.filter((cartItem: IMenuItem) => cartItem.id === id).length;

  return (
    <li data-test-id="menu-item" className="item">
      <h2>{menuItem.name}</h2>
      <p>
        {menuItem.dietaries.map((dietary: string) => (
          <span key={dietary} className="dietary">
            {dietary}
          </span>
        ))}
      </p>
      <button
        disabled={isAdded(menuItem.id)}
        data-test-id="btn-add-item"
        onClick={() => addItem(menuItem)}
        className="add-item"
      >
        Add
      </button>
    </li>
  );
}

export default MenuItem;
