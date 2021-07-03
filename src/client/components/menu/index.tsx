import * as React from "react";
import { useRecoilValue } from "recoil";

import { menuState } from "../../atoms/MenuAtom";
import { IMenuItem } from "../../shared/types";
import MenuItem from "./MenuItem";

function Menu() {
  const menuItems: IMenuItem[] = useRecoilValue(menuState);

  return (
    <>
      <ul className="item-picker">
        {menuItems.map((menuItem: IMenuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
