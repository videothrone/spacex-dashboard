# SpaceX Dashboard

A minimal React-based SPA / Dashboard that displays launch data via the SpaceX API. This was built in the beginning of 2022 in about half a day as a test assignement for a job application and was the first React app I had built since my bootcamp. May be subject to upgrades and improvements down the line.

---

## Preview

[![SpaceX Dashboard](/public/Screenshot.png)](https://space-x-dash.netlify.app/)


## Local setup

-  Clone the repo
-  Run `npm i`
-  Run `npm start`

## Live

[https://space-x-dash.netlify.app/](https://space-x-dash.netlify.app/)

## Tech

-  Built with create-react-app, API calls with Axios

## Features

-  On load the app pulls the latest launches from the SpaceX API and displays them as little info boxes
-  A search bar allows the user to search for individual launch IDs which then loads and displays additional data including the launch video in a more prominent info box
