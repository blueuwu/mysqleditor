# SQL Editor

### [Live Version]()

A Web App For Basic SQL editor view to demonstrate where your users can query easily on a table using SQL and have ui components for the functionalities that can be added.

## Requirements

- yarn

## Libraries Used

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [React-Ace](https://github.com/securingsincity/react-ace)

## How to run:

1. [Download] or [Clone] the Repository.
2. Run `yarn install` to install the project dependencies.

3. Run `yarn start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img]()

### Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Import for `react-ace` editor was long tasks running during page load, Converted it to Lasy loaded component using `React.lazy()` for code-splitting and delaying it's loading.

3. Only importing used Module in a component from library rather than importing whole library.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
