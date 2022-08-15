# React - Minimal Way through CDN link
## Latest way
```
const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
```
## Traditional Way - Deprecated from v18+
```
const container = document.getElementById('app');
ReactDOM.render('ok',container);
```

# Things to Remember:
## React JS
    - JS Library for building UI
    - Allows us to create reusable UI components
    - Open source JS library for building UI
    - Initial release by Jordan Waler in 2013
    - Now under Facebook
    - Additional library: routing, rendering, etc
    - Module bundler: JSX, Webpack, Grunt, Babel.js
## Server Package
There are two ways:
    - Serve package i.e. npm install -g serve
    - Live server package that can detect changes for VS Code extension
## Babel CDN
    - Transpile ES6 to ES5
    - HTML written inside javascript in JSX which needs to compiled and done through Babel
    - Here index.js consist jsx code
    - Must import babel CDN and two files - react.development.js and react-dom.development.js - files on index.html file
# Create-React-APP
    - Official tool to install react-app developed by same team who developed react
    - Offers a modern build setup with no configuration
    - Installation by npm(using current version) or npx (using latest version)
    - If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.
    - npx always use the latest version
## Installation
```
npx create-react-app my-app --use-npm
npx create-react-app my-app --use-yarn
npm start or yarn start
npm run build or yarn build
```