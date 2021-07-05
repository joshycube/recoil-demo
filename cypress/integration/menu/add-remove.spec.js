import SELECTORS from "../../support/selectors";

describe("Menu actions functionality", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should add an item to the cart", () => {
    cy.get(SELECTORS.FILTER_INPUT).clear();
    cy.get(SELECTORS.MENU_ITEM).should("be.visible");
    cy.get(SELECTORS.BTN_ADD_ITEM).eq(0).click();
    cy.get(SELECTORS.CART_ITEM).eq(0).should("be.visible");
    cy.get(SELECTORS.BTN_ADD_ITEM).eq(0).should("be.disabled");
  });

  it("Should remove an item from the cart", () => {
    cy.get(SELECTORS.BTN_REMOVE_ITEM).eq(0).click();
    cy.get(SELECTORS.BTN_ADD_ITEM).eq(0).should("be.enabled");
  });
});
