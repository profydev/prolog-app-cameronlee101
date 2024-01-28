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
        const footerLinks = [
          { name: "Docs", href: "/dashboard#" },
          { name: "API", href: "/dashboard#" },
          { name: "Help", href: "/dashboard#" },
          { name: "Community", href: "/dashboard#" },
        ];

        cy.get("footer").find("a").should("have.length", 4);

        cy.get("footer")
          .find("a")
          .each(($el, index) => {
            cy.wrap($el).contains(footerLinks[index].name);
            cy.wrap($el).should("have.attr", "href", footerLinks[index].href);
            cy.wrap($el).should("be.visible");
          });
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
        const footerLinks = [
          { name: "Docs", href: "/dashboard#" },
          { name: "API", href: "/dashboard#" },
          { name: "Help", href: "/dashboard#" },
          { name: "Community", href: "/dashboard#" },
        ];

        cy.get("footer").find("a").should("have.length", 4);

        cy.get("footer")
          .find("a")
          .each(($el, index) => {
            cy.wrap($el).contains(footerLinks[index].name);
            cy.wrap($el).should("have.attr", "href", footerLinks[index].href);
            cy.wrap($el).should("be.visible");
          });
      });
    });
  });
});
