# Deployment 
Deployed using GitHub Pages 
[link to website](https://first-quantum-mind.github.io/Youtube_client_app/dist/you-tube-client-app/index.html)

# Description 

#### Functional requirements
- By clicking on the **Settings button**, the **Filtering criteria block** should be toggled
    - It should be possible to sort search results by date or count of views
    - Sorting should work both in the direction of decreasing values and in the direction of increasing values
    - Using a pipe, filter search results by value that a user types in the input
    - **404 page**
    - If the user entered an incorrect URL which is missing in the router configuration, the app should redirect him to the 404 page
- **Login page**
    - When the user isn't logged in, the app should prevent him/her from navigating to any pages other than the login page. A router guard would be helpful to implement such behavior.
    - There’s no user validation at this stage. You can enter arbitrary credentials and invoke login using an appropriate service.
    - Create a login service to enable the required login functionality.
    - Once the user has submitted the form, an appropriate method should be called in the login service that saves a fake auth token in *localStorage*. Then, the user should be redirected to the **Main page**. If the user gets logged out, he/she should be redirected to the initial login page and the auth token should be deleted from *localStorage*.
    - The login button in the Header component could remain inactive for now, because implementing its functionality requires some RxJS-based features (we’ll deal with it in the upcoming lesson and corresponding task). In order to implement the logout functionality, you can create a separate button that calls the logout method of the login service.
- **Main page**
    - Move the state and its methods from the Board component to a dedicated service.
    - By clicking the *More* button, the **Detailed information** page should appear
- **Detailed information page**
    - Should contain information about the selected video.
    - To determine which video is selected, pass its id as a route param

## Installation
```sh
npm i
ng serve
``` 

