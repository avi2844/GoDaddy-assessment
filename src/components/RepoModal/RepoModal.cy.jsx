import React from 'react'
import RepoModal from './RepoModal'
import { ApiContext } from '../../contexts/ApiContext';

describe('<RepoModal />', () => {
  it("renders repo details when open", () => {
    const testRepo = [{
      id: 1,
      full_name: "godaddy/test-repo",
      description: "Test description",
      language: "Ruby",
      forks_count: 5,
      open_issues_count: 2,
      watchers_count: 9,
      html_url: "https://github.com/godaddy/test-repo",
    }];

    cy.mount(
      <ApiContext.Provider value={testRepo}>
      <RepoModal
        open={true}
        handleClose={() => {}}
        RepoId={1}
      />
      </ApiContext.Provider>
    );

    cy.get('h2').should('have.text', 'godaddy/test-repo');
    cy.get('p').eq(0).should('have.text', 'Test description');
    cy.get('p').eq(1).should('contain.text', 'Ruby');
    cy.get('p').eq(2).should('contain.text', '5');
    cy.get('p').eq(3).should('contain.text', '2');
    cy.get('p').eq(4).should('contain.text', '9');
    cy.get("a").should("have.attr", "href", testRepo[0].html_url);
    cy.get("a").should("have.text", "View on Github");
  });
})