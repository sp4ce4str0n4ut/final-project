# POKEDEX App
### Requirements

* `axios`
* `concurrently`
* `node-sass`
* `webpack`
* `react`
* `react-dom`
* `react-router-dom`
* `react-redux`
* `redux-thunk`

### Features

- **Pagination** via `Load more` button 
- **Adaptive design**
- **Navigation Menu**
- **State management** using `Redux`+`Thunk`

### Structure
- **Home page** contains list of cards with all available pokemons (more pokemons could be load through pressing `Load more` button);
- Pressing `Catch` button allows you to **catch a pokemons**;
- Pressing on pokmon card shows you **a pokemon page**, which contains detailed information abourt pokemon. Additionly, if pokemon is caught, date and time of capture going to be shown;
- List of **caught pokemons** and redirect to homepage is available by buttons on the sidebar.

### Available Scripts

In order to run project, enter following commands while in the project main directory:

## `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
