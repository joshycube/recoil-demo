import * as React from "react";
import { useRecoilCallback } from "recoil";
import { debounce } from "lodash";

import { menuState } from "../../atoms/MenuAtom";
import { menuItemsFilterQuery } from "../../selectors/FilterSelector";

function MenuFilter() {
  const [text, setText] = React.useState("");

  const filterMenuItems = useRecoilCallback(
    ({ set }) =>
      async (text: string) => {
        const menuItemsFiltered = menuItemsFilterQuery(text);
        set(menuState, menuItemsFiltered);
      },
    [text]
  );

  const delayedQuery = React.useCallback(
    debounce((text) => filterMenuItems(text)),
    [text]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    delayedQuery(text);
  };

  return (
    <div className="filters">
      <input
        data-test-id="filter-input"
        onChange={onChange}
        className="form-control"
        placeholder="Name"
      />
    </div>
  );
}

export default MenuFilter;
