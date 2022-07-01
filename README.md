# SQL Editor

### [Live Version](https://62bed7a9c118f84deec06960--cheerful-melomakarona-c90521.netlify.app/)

A Web App For Basic SQL editor view to demonstrate where your users can query easily on a table using SQL and have ui components for the functionalities that can be added.

## Requirements

- yarn

## Libraries Used

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [React-Ace](https://github.com/securingsincity/react-ace)

## How to run:

1. [Download](https://github.com/blueuwu/mysqleditor/archive/refs/heads/main.zip) or [Clone](https://github.com/blueuwu/mysqleditor.git) the Repository.
2. Run `yarn install` to install the project dependencies.

3. Run `yarn start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img](https://user-images.githubusercontent.com/80516804/176891254-6b0d74dd-72ce-4335-870b-4f05d99d5ed6.PNG)
![img](https://user-images.githubusercontent.com/80516804/176891448-6b6c1552-fe5e-466d-9bc9-9af82a58e118.PNG)


### Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Import for `react-ace` editor was long tasks running during page load, Converted it to Lasy loaded component using `React.lazy()` for code-splitting and delaying it's loading.

3. Only importing used Module in a component from library rather than importing whole library.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
