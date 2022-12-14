# SimonPine - Design

E-commerce simulator builded with React.js and Firestore.

## Deploy

[oritsuru.netlify.app](https://simonpine-design.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status)](https://app.netlify.com/sites/simonpine-design/deploys)

## Description

The e-commerce is divided in 5 pages, home, store, about, cart and order.
- Home: Present the project and show 3 random items from the store (from firebase).
- About: It is only filler and does not contribute anything.
- Store: Is where the items are shown and can be filter by price, name, company and category.
- Cart: Is where the items that the user are going to buy are shown (works with localStorage), there the user can add and remove items, and see the price in real time. - Also is where the user acces to the checkout.
- Order: After the user generates a purchase, he gets a code that can be used to see the details of that order.

## Libraries

- [Create React App][cra] - Project setup
- [React Router][router] - Routing and navigation

## Scripts

- `npm start`
    Start the project in the development enviroment.
- `npm build`
    Build the project for production.
- `npm test`
    Start the project and run tests.

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org)

## Contact

- https://twitter.com/SimonPine2
- simonpineda0521@gmail.com

## Folder Structure

- `src`: Contains all the source code.
    - `components`: General components used across the app.
    - `views`: Specific components organized by view.
    - `context`: React context providers.
- `App.js`: Main component.

[deploy]: https://simonpine-design.netlify.app/
[status]: https://api.netlify.com/api/v1/badges/a253097a-2925-4d33-bb21-7eb6cf663ab0/deploy-status
[netlify]: https://app.netlify.com/sites/simonpine-design/deploys
[cra]: https://github.com/facebook/create-react-app
[router]: https://github.com/remix-run/react-router
