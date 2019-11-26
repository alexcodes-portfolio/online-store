# Online Store

The idea behind this project was to create a mock online store with the basic online store functionality. The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

View the running app at [https://react-app.eu](https://react-app.eu)

The app incorporates such features as user authentication, shopping cart, grouping products into categories, product search, displaying related items, zoomable photos of products.

The connection to the backend is provided via the fake REST API JSON Server deployed to Heroku. Requests to the server are performed using Fetch API.

### Features:
- You can create an account and sign in.
- You can browse products, filter them by category, enter a search string in a text field, add items to the cart or remove them, change the number of items in the cart.
- If a product page is being viewed, other products of the same category are displayed at the bottom of the page.
- After adding an item to the cart you have a choice between navigating to the cart or continuing browsing products.
- The total price is updated every time the cart contents  undergo changes.
- Feedback is provided after adding or removing items, as well as after creating an account, or entering incorrect data when logging in.
- If you add items to the cart as an anonymous user and then log in, the items in the cart will be preserved. If any items had been placed in the cart during the previous authenticated session, the contents of the anonymous cart will be merged into the existing authenticated cart.
- The contents of the cart do not expire even after a full browser restart as they are saved to localStorage.