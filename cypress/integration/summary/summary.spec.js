import SELECTORS from "../../support/selectors";

describe("Menu actions functionality", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should increment the counter", () => {
    cy.get(SELECTORS.FILTER_INPUT).clear();
    cy.get(SELECTORS.MENU_ITEM).should("be.visible");
    cy.get(SELECTORS.BTN_ADD_ITEM).eq(0).click();
    cy.get(SELECTORS.CART_ITEM).eq(0).should("be.visible");
    cy.get(SELECTORS.BTN_ADD_ITEM).eq(1).click();
    cy.get(SELECTORS.CART_ITEM).eq(1).should("be.visible");
    cy.get(SELECTORS.CART_COUNTER).should("contain", 2);
  });

  it("Should display the dietary details", () => {
    cy.get(SELECTORS.DIETARY_SUMMARY).eq(0).should("contain", "1x");
    cy.get(SELECTORS.DIETARY_SUMMARY)
      .eq(0)
      .find(SELECTORS.DIETARY_TYPE)
      .should("contain", "v");
    cy.get(SELECTORS.DIETARY_SUMMARY).eq(1).should("contain", "1x");
    cy.get(SELECTORS.DIETARY_SUMMARY)
      .eq(1)
      .find(SELECTORS.DIETARY_TYPE)
      .should("contain", "ve");
    cy.get(SELECTORS.DIETARY_SUMMARY).eq(2).should("contain", "1x");
    cy.get(SELECTORS.DIETARY_SUMMARY)
      .eq(2)
      .find(SELECTORS.DIETARY_TYPE)
      .should("contain", "n!");
    cy.get(SELECTORS.DIETARY_SUMMARY).eq(3).should("contain", "2x");
    cy.get(SELECTORS.DIETARY_SUMMARY)
      .eq(3)
      .find(SELECTORS.DIETARY_TYPE)
      .should("contain", "df");
    cy.get(SELECTORS.DIETARY_SUMMARY).eq(4).should("contain", "2x");
    cy.get(SELECTORS.DIETARY_SUMMARY)
      .eq(4)
      .find(SELECTORS.DIETARY_TYPE)
      .should("contain", "gf");
    cy.get(SELECTORS.DIETARY_SUMMARY).eq(5).should("contain", "1x");
    cy.get(SELECTORS.DIETARY_SUMMARY)
      .eq(5)
      .find(SELECTORS.DIETARY_TYPE)
      .should("contain", "rsf");
  });
});
