import packageJson from "../../package.json";

describe("Layout Elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("footer", () => {
    context("desktop resolution", () => {
      beforeEach(() => {
        cy.viewport(1025, 900);
      });

      it("displays correct version, as well as logo", () => {
        cy.get("footer").should(
          "contain.text",
          `Version: ${packageJson.version}`,
        );

        cy.get("footer").find("img").should("be.visible");
      });

      it("displays 4 links", () => {
        cy.get("footer").find("a").should("have.length", 4);

        cy.get("footer")
          .contains("Docs")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");

        cy.get("footer")
          .contains("API")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");

        cy.get("footer")
          .contains("Help")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");

        cy.get("footer")
          .contains("Community")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");
      });
    });

    context("desktop resolution", () => {
      beforeEach(() => {
        cy.viewport("iphone-8");
      });

      it("displays correct version, as well as logo", () => {
        cy.get("footer").should(
          "contain.text",
          `Version: ${packageJson.version}`,
        );

        cy.get("footer").find("img").should("be.visible");
      });

      it("displays 4 links", () => {
        cy.get("footer").find("a").should("have.length", 4);

        cy.get("footer")
          .contains("Docs")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");

        cy.get("footer")
          .contains("API")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");

        cy.get("footer")
          .contains("Help")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");

        cy.get("footer")
          .contains("Community")
          .should("have.attr", "href", "/dashboard#")
          .should("be.visible");
      });
    });
  });
});
