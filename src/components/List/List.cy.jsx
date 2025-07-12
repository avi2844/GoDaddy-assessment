import React from "react";
import List from "./List";

describe("<List />", () => {
  it("renders with repo name and description", () => {
    cy.mount(
      <List
        repoName="godaddy/repo-one"
        description="First repo description"
        id={1}
        onClick={cy.stub().as("onClick")}
      />
    );

    cy.get("h2").should("have.text", "godaddy/repo-one");
    cy.get("span").should("have.text", "First repo description");
  });

  it("triggers onClick with id when clicked", () => {
    cy.mount(
      <List
        repoName="godaddy/test-repo"
        description="Test description"
        id={45}
        onClick={cy.stub().as("onClick")}
      />
    );

    cy.contains("godaddy/test-repo").click();
    cy.get("@onClick").should("have.been.calledWith", 45);
  });
});
