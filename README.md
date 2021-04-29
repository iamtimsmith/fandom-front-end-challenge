# Front-End Developer Challenge

Thank you for the opportunity to work on this challenge. I thought it was a good mixture of fun and challenging, which made it enjoyable to work on. Although I left comments in the code, I thought it may be helpful to walk through my choices with some of the pieces.

## Technology
I decided to use [Create React App](https://github.com/facebook/create-react-app) since it provides scaffolding & testing, and SSR wasn't a requirement. I also chose to add [TypeScript](https://www.typescriptlang.org/) to help create better and more maintainable code were this project to grow. [Styled Components](https://styled-components.com/) were also an easy choice since it automatically handles cross-browser styles going back to IE11. Testing was done using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## File Structure
The components follow the same pattern which is `[component].tsx` for the component itself, `[component].style.ts` for component-specific styles, `[component].i.ts` for any component-specific interfaces or types, and `[component].test.tsx` for component specific tests. I have found that this can provide an easily scalable structure while keeping related items together.

## Choices and Assumptions
There was some amount of ambiguity in the instructions (which I'm sure was intentional). Below you can find the assumptions and solutions I came up with.

- Right click on mobile (doesn't exist) - To keep things simple, I set the talents up to toggle on mobile devices so the user doesn't have to mess with touch and hold or additional menus.
- Removing a prerequisite talent - The instructions didn't say anything about what should happen if a user tries to remove a talent further up the tree. I decided that it wouldn't be good UX to make the user remove each one individually in case the tree were to grow. Instead, I created a modal that shows all of the talents which will be removed and requires the user to confirm their choice. The modal only pops up when the user tries to remove a talent with others selected further in the tree.
- Made total points a state item and a part of context - This was done for 2 reasons:
    1. The piece of information was being used in a few places and this means not passing the same data down the component tree
    2. If this were an app, I assume the available points would be associated with a characters level which would also be stored in the context, so using state would allow it to be updated as the character levels up.

## Additional Features
Here are some additional features I added to improve the UX or just have a little fun:

- Added modal which shows talents to be removed (if more than one) and require user to confirm removal
- Added modal with instructions in case user can't figure out how to use the app
- Added an error message which shows if a user tries to select talents out of order
- Added a success message when user has spent all of their points

## Using this project

### Available Scripts
In the project directory, you can run:

> `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

> `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
