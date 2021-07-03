import { atom, selector } from "recoil";

export const menuState = atom({
  key: "MenuState",
  default: selector({
    key: "MenuState/Default",
    get: async () => {
      let data;
      try {
        const response = await fetch("http://localhost:8080/api/items", {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        data = await response.json();
      } catch (error) {
        throw error;
      }
      return data.items;
    },
  }),
});
