import SELECTORS from "../../support/selectors";

describe("Filter functionality", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should filter the items based on the keyword", () => {
    cy.get(SELECTORS.FILTER_INPUT).clear().type("Mang").type("{enter}");
    cy.get(SELECTORS.MENU_ITEM).should("be.visible");
    cy.get(SELECTORS.MENU_ITEM).should("have.length", 2);
    cy.get(SELECTORS.FILTER_INPUT).clear().type("Mang pom").type("{enter}");
    cy.get(SELECTORS.MENU_ITEM).should("have.length", 1);
  });
});
