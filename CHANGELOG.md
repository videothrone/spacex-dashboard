# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.1] - 2024-04-12

### Changed
* Adjust ScrollTopTop button mobile position, so in won't overlap other buttons
* Removed unnecessary padding of ScrollToTop button

### Fixed
* ScrollToTop now works in Chrome and only if it makes sense to scroll, based on the visibility of the ScrollToTop button

## [2.1.0] - 2024-04-11

### Changed
* LatestLaunches has now a pagination to click through all launches
* If user scrolls page, a ScrollTopTop button enables to scroll up
* Adjust LatestLaunches, SearchBar class names and some global color variable names
* Some small CSS mobile fixes to fonts, button sizes

### Added
* Add ScrollToTop, Pagination components to LatestLaunches
* Add total launches to LatestLaunches
* Add [Craco](https://www.npmjs.com/package/@craco/craco) to enable global SCSS imports
* Add list-reset mixin
* Add [FontAwesome](https://fontawesome.com/) to replace own icon(s)

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
