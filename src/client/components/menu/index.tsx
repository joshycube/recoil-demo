import * as React from "react";
import { useRecoilValue } from "recoil";

import { menuState } from "../../atoms/menuAtom";
import { IMenuItem } from "../../shared/types";
import MenuItem from "./MenuItem";

function Menu() {
  const menuItems: IMenuItem[] = useRecoilValue(menuState);

  return (
    <>
      <div className="filters">
        <input className="form-control" placeholder="Name" />
      </div>
      <ul className="item-picker">
        {menuItems.map((menuItem: IMenuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
