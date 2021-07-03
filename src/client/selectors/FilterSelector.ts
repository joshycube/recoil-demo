import { selectorFamily } from "recoil";

export const menuItemsFilterQuery = selectorFamily({
  key: "MenuItemsFilterQuery",
  get: (keyword: string) => async () => {
    let data: any;
    const body = JSON.stringify({ keyword });

    try {
      const response = await fetch("http://localhost:8080/api/items/filter", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body,
      });
      data = await response.json();
    } catch (error) {
      throw error;
    }

    return data.items;
  },
});
