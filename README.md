# SpyQL

SpyQL is a spy-themed browser-based game that helps developers learn SQL, deployed here: https://spyql.herokuapp.com/.

![spyql-level1](https://media.giphy.com/media/H0XE7IdvG7BJdY8aTD/giphy.gif)

Collaborators: Melody Chen, Jackie Feit, Sydney Scott

## Libraries that were used in this project:

### Styling:

* Typed.js - text typing on display | https://github.com/mattboldt/typed.js/
* React-Typed - A React wrapper for Typed.js | https://github.com/ssbeefeater/react-typed
* React-Bootstrap - Bootstrap 4 components built with React | https://github.com/react-bootstrap/react-bootstrap
* React-Countdown-Circle-Timer - Lightweight React countdown timer component | https://github.com/vydimitrov/react-countdown-circle-timer

### Functionality:

CodeMirror - in-browser code editor | https://github.com/codemirror/CodeMirror

### Setup

To run SpyQL locally, you'll need to take the following steps:

* Fork and clone github repo
* npm install
* npm run seed
* npm run start-dev

(Note: running the game locally is not recommended due to random seeding; if you do want to play the full game on localhost, be sure to uncomment the console.log in the Table component and use your local database's tableId.)
