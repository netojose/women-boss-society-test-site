# Women Boss Society registration test

## Table of contents

-   [Time to complete specs](#time-to-complete-specs)
-   [Source code](#source-code)
-   [Project demo](#project-demo)
-   [Used technologies](#used-technologies)
-   [Running project](#running-project)
-   [Running tests](#running-tests)

## Time to complete specs

-   Environment setup and tooling: 1h:30m
-   Coding: 4h:30m
-   Writing tests: 2h:30m
-   Deploy: 0h:10m

## Source code

The source code can be found at https://github.com/netojose/women-boss-society-test-site

## Project demo

You can see this project running online on my server, I have published the project at https://womenbosssociety.joseneto.dev. You just need to click on link and see :)

## Used technologies

-   https://reactjs.org
    -   I used React because it has a good ecosystem and is very productive. The website is responsive, so it can open in small screens. And... The code can be easily moved to react native and create native mobile apps.
-   https://babeljs.io
    -   A JavaScript compiler used to convert JSX and "futuristic" code in vanilla Javascript, to be able to run in any Browser.
-   https://webpack.js.org
    -   An excellent module bundler used to transform and generate frontend assets.
-   https://eslint.org
    -   A static code analysis tool for identifying problematic patterns found in JavaScript code
-   https://jestjs.io
    -   I used Jest as JavaScript Testing Framework, to test my code.
-   https://airbnb.io/enzyme
    -   A good testing utility for React that helps me to test my React Components' output (manipulate, traverse, and in some ways simulate runtime given the output).
-   https://emotion.sh
    -   A library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. This also solves commom problems when we are coding using CSS. [Please see this article for more information](https://objectpartners.com/2017/11/03/css-in-js-benefits-drawbacks-and-tooling/)
-   https://www.npmjs.com/package/Validator
    -   A simple validator package used to validate the form inputs. I chosen this package because is small and without a lot of rules. I just need to add the rules I need.
-   https://www.smooth-code.com/open-source/loadable-components
    -   Used to load my components in chunks. With this package, I can do code splitting, and avoid a big bundle, delivering a fast website.
-   https://www.i18next.com
    -   Internationalization package. I used this package to delivery translated texts for the interface. This is mandatory for a multilingual project.
-   https://reacttraining.com/react-router
    -   Used to create routes for the application, splitting the website into different pages, with history, bookmarking, etc.
-   https://nodejs.org
    -   Used to compile code and build the project.

## Running project

-   Prerequisites
    -   Node.js
    -   npm/yarn
    -   Git
-   Steps
    -   Clone project from GitHub: `git clone git@github.com:netojose/women-boss-society-test-site.git`
    -   go to folder: `cd women-boss-society-test-site`
    -   Install dependences: `yarn` or `npm install`
    -   Development mode:
        -   run `yarn dev-server` or `npm run dev-server` and open the project at http://localhost:8080
    -   Production bundle
        -   run `yarn build` or `npm run build`
        -   The production build is generated inside `build` folder. Serve this folder using any web server

## Running tests

**Currently the test code coverage is 93.28% of project code lines**

-   Prerequisites
    -   Node.js
    -   npm/yarn
    -   Git
-   Steps
    -   Clone project from GitHub: `git clone git@github.com:netojose/women-boss-society-test-site.git`
    -   go to folder: `cd women-boss-society-test-site`
    -   Install dependences: `yarn` or `npm install`
    -   run `yarn test` or `npm run test`. You can run tests with code coverage report, running `yarn test:coverage` or `npm run test:coverage`

Curently, the project tests are this way:

Tests on components:
![Components tests](https://i.imgur.com/TunvhfZ.png)

Coverage report:
![Coverage report 1](https://i.imgur.com/RQIai37.png)
![Coverage report 2](https://i.imgur.com/sijpYaM.png)
