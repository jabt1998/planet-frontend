# Planet-Api

## Project description

For this project set by \_Nology we were tasked with creating an API and then connecting it to a front-end.

Hosted here https://jabt1998.github.io/planet-frontend/

## Creating the API

Using Express.js I created an object of planets which stored the relevant information that could be extracted from the API.

Then I created requests:

 * Starting with a get request that would get all the entries.
 * A request that would get a specific entry based on their ID.
 * A post request that would send data to the API and then sort the entries by highest ID.
 * A delete request which would delete the entry based on their ID.

All of the requests were sent with status responses and messages.

## Creating the Front-end

Using fetch the object was gotten from the API. This was then turned into json so that it could be used in React.

This was then mapped over and displayed in a table. 

Then in order to send data to the API so that a user to input their own planet a planetForm component was made.

Within the app another fetch was made posting the data that the user put in the planetForm to the API.

This then generated the planet at the bottom of the table.

## Challenges

When working through this project the biggest challenge that I came across was sending data to the API in order to return the users planet. 

Firstly, when posting the users inputed planet to the API I passed this function into a useEffect. This then started to created multiple responses and was continuely adding the same planet to the bottom of the table. To solve this I attached the function to a submit button so that it would only be called once. 

Secondly, when posting data to the API I was passing through key value pairs nested within a key and thus, running into errors. By using postman I could analyse the problem and then send through just the correct key value pairs. 

Thirdly, when posting the data one of the key value pairs passed through is a boolean. I was passing this through to the API as a string and thus it was coming back as undefined. To solve this I used a checkbox for this input and this posted the key value pair as a boolean.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
