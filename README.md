# SpaceX Dashboard

A minimal React-based SPA / Dashboard that displays launch data via the SpaceX API. This was built initially in the beginning of 2022 in about half a day as a test assignment for a job application and was the first React app I had built since my bootcamp. With <b><a href="CHANGELOG.md">Version 2</a> </b>I've refactored the project to mirror by experiences since then. This includes a better markup structure, fixing wonky functions, rewriting the CSS to modular BEM SCSS classes, adding additional functionality and versioning. For more information on the differences and additions please visit the <a href="CHANGELOG.md">changelog</a>.

<b>Note:</b> The API is deprecated and doesn't receive any data updates anymore. Alternatives are too pricely for a showcase project, so I'm keeping it as is for the moment. :)

---

## Preview

[![SpaceX Dashboard](/public/screenshot1.png)](https://space-x-dash.netlify.app/)


## Local setup

-  Clone the repo
-  Run `npm i`
-  Run `npm start`

## Live

[https://space-x-dash.netlify.app/](https://space-x-dash.netlify.app/)

## Tech

-  Built with create-react-app (though probably will try to switch out for Vite down the line)
-  Uses the unofficial open source [SpaceX-API v4](https://github.com/r-spacex/SpaceX-API/blob/master/README.md). All used endpoints are `GET` requests without authentication.
-  API calls done with Axios

## Features

-  On load the app pulls the latest launches from the SpaceX API and displays them as little info boxes
-  A search bar allows the user to search for individual launch IDs. The app then loads and displays additional data including the launch video in a more prominent info box
-  IDs can be copied to the clipboard with a button to make the search less of a hassle

## To-Do

-  CSS probably still needs some clean-up and refactoring here and there
-  Want to add SASS-mq or something similar
-  More Cross-Browser testing is due
-  The boxes in the LatestLaunches component are a bit barren, maybe add additional info and wiki links
-  Add more info to the search result
-  Even though the app doesn't do much with the string from the SearchBar, sanitizing the input could make sense
