# Setup

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run storybook`

Runs the Storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.


## Technical decisions

I used React's Context API for Global State management. It's a build in tool that provides satisfactory results. 
For front-end testing of composite components I used Storybook which allows to build components in isolation and can serve as a visual library and documentation and manual testing tool.

I didn't build out a back-end for this application. My vision would be for the app to fetch initial state from a server end-point. I'm faking that data by providing a `./src/data.js` file. And it would be writing to db to update on every state update.
Another thing that would be given with the back-end implementation is user and their picture. App would use the user in session as an owner od posts and comments. The avatars would be stored in S3 bucket or some other data storage and fetch upon request.

I added bunch of files `./src/assets` because when I wanted to use FontAwesome I couldn't find the correct icons in the free tier.

I realized I didn't follow the described in the project PRD phases  very well making it harder on myself. I need to make sure when approaching a new project not get overexcited and keep organized.