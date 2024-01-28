import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  context("no request response throttling", () => {
    beforeEach(() => {
      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      // wait for request to resolve
      cy.wait("@getProjects");
    });

    context("desktop resolution", () => {
      beforeEach(() => {
        cy.viewport(1025, 900);
      });

      it("renders the projects", () => {
        const languageNames = ["React", "Node.js", "Python"];
        const statuses = ["Critical", "Warning", "Stable"];

        // get all project cards
        cy.get("main")
          .find("li")
          .each(($el, index) => {
            // check that project data is rendered
            cy.wrap($el).contains(mockProjects[index].name);
            cy.wrap($el).contains(languageNames[index]);
            cy.wrap($el).contains(mockProjects[index].numIssues);
            cy.wrap($el).contains(mockProjects[index].numEvents24h);
            cy.wrap($el).contains(capitalize(statuses[index]));
            cy.wrap($el)
              .find("a")
              .should("have.attr", "href", "/dashboard/issues");
          });
      });
    });
  });

  context("with request response throttling", () => {
    beforeEach(() => {
      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
        req.reply({
          fixture: "projects.json",
          delay: 1000,
        });
      }).as("delayedGetProjects");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");
    });

    context("desktop resolution", () => {
      beforeEach(() => {
        cy.viewport(1025, 900);
      });

      it("displays loading circle when projects haven't loaded in yet", () => {
        cy.get('[data-test="loading-indicator"]').should("be.visible");

        cy.wait("@delayedGetProjects");

        cy.get("[data-test='loading-indicator']").should("not.exist");
      });
    });
  });

  context("error API response", () => {
    beforeEach(() => {
      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        forceNetworkError: true,
      }).as("getProjectsFailure");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");
    });

    context("desktop resolution", () => {
      beforeEach(() => {
        cy.viewport(1025, 900);
      });

      it("renders an error message after some time", () => {
        cy.get('[data-test="loading-indicator"]').should("be.visible");

        cy.contains(/there was a problem while loading the project data/i, {
          timeout: 15000,
        }).should("exist");

        cy.contains(/try again/i).should("exist");
      });
    });
  });
});
