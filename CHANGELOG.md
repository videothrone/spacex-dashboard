# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.2] - 2024-04-05

### Changed
* Replace font with Google font [Spacegrotesk](https://fonts.google.com/share?selection.family=Space+Grotesk:wght@300..700)
* Add box-shadow to all box elements with helper class
* Adjust overlay display time

## [2.0.1] - 2024-04-04

### Changed
* Some markup and CSS refactoring and clean-up

### Added
* Add LaunchBox component, that contains the launch box element

## [2.0.0] - 2024-04-03

### Changed
* Make the API call a reusable and importable function
* Make most functions in components reusable by either making them components on their own or by putting them into a helpers file
* Refactor and simplify how Timer component is rendered
* Refactor all CSS to SASS with BEM principles
* Refactor and clean-up large chunks of the CSS for better mobile UX

### Added
* Add versioning 🙃
* Add proper modular component structure, clean up existing components
* Add Loader component, that renders a spinner animation
* Add "copy ID to clipboard" functionality to the latest launches boxes, including a short overlay animation
* Add crew badge to LatestLaunches boxes
* Add an actual .editorconfig file

## [1.0.0] - 2022-03-23
* Inital version
