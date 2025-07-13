# GoDaddy Repositories Viewer

A React-based application that fetches and displays public repositories from the [GoDaddy GitHub organization](https://github.com/godaddy). Users can view basic information and click to explore individual repositories in a modal.

### Prerequisites
- Node.js (v16 or later recommended)
- npm (v8 or later)

### Installation

Clone the repository:-
```
git clone https://github.com/avi2844/GoDaddy-assessment.git
cd GoDaddy-assessment
```
Install dependencies:-
```
npm install
```
Start the development server:-
```
npm run dev
```
The app will be available at: http://localhost:5173

### Testing

```
npx cypress open --component
Click on Component Testing
Click on Start component testing in chrome
Click on List.cy.js file to run the test
Click on RepoModal.cy.js file to run the test
```
## Why these Libraries
- React - As it’s a widely adopted and efficient JavaScript library for building dynamic user interfaces. It allows us to break the UI into reusable components, making development faster and easier to maintain.
- Material UI - For ready-made, responsive, and accessible UI components. It speeds up development by providing a polished and consistent design system that works well across devices.
- Context API - To manage and share the fetched data (repository list) across components. This keeps the state centralized and makes the code cleaner without needing a heavy state management library like Redux.
- Cypress - It provides a reliable way to write both component tests and end-to-end tests. It also offers a great visual interface for debugging tests in the browser.

## Live Application
https://go-daddy-assessment.vercel.app/
