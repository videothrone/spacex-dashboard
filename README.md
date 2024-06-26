# SpaceX Dashboard

A minimal React-based SPA / Dashboard that displays launch data via the unofficial open source [SpaceX-API v4](https://github.com/r-spacex/SpaceX-API/blob/master/README.md). This was built initially in the beginning of 2022 in about half a day as a test assignment for a job application and was the first React app I had built since my bootcamp. With <b><a href="CHANGELOG.md">Version 2</a> </b>I've refactored the project to mirror my experiences since then. This includes a nicer visual style, a better markup structure, fixing wonky functions, rewriting the CSS to modular BEM SCSS classes, adding additional functionality and versioning. For more information about differences and additions please visit the <a href="CHANGELOG.md">changelog</a>.

<b>Note:</b> The API is deprecated and doesn't receive any data updates anymore. Alternatives are too pricely for a showcase project, so I'm keeping it as is for the moment. :)

---

## Preview

[![SpaceX Dashboard](/public/screenshot.png)](https://space-x-dash.netlify.app/)


## Local setup

-  Clone the repo
-  Run `npm i`
-  Run `npm start`

## Live

[https://space-x-dash.netlify.app/](https://space-x-dash.netlify.app/)

## Deployment Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/f78f5641-3d7f-4dea-97c8-330f604b4d83/deploy-status)](https://app.netlify.com/sites/space-x-dash/deploys)

## Tech

-  Built with create-react-app (though probably will try to switch out for Vite down the line)
-  Uses the unofficial open source [SpaceX-API v4](https://github.com/r-spacex/SpaceX-API/blob/master/README.md). All used endpoints are `GET` requests without any need for authentication.
-  API calls done with Axios
-  Icons are pulled from FontAwesome

## Features

-  On load the app pulls the latest launches from the SpaceX API and displays them as little info boxes
-  The displayed launches can be filtered by successful and unsuccessful launches
-  A pagination enables the user to click through all launches
-  A search bar allows the user to search for individual launch IDs. The app then loads and displays additional data including the launch video in a more prominent info box
-  IDs can be copied to the clipboard with a button to make the search less of a hassle
-  If the page is scrolled, a button appears that enables users to scroll to the top

## To-Do

-  CSS probably still needs some clean-up and refactoring here and there
-  Want to add SASS-mq or something similar
-  The boxes in the LatestLaunches component are a bit barren, maybe add additional info and wiki links
-  Add more info to the search result box
-  Even though the app doesn't do much with the string from the SearchBar, sanitizing the input could make sense
-  While the search input has basic validation, additional validation and error messages could be an option
