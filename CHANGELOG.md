# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.2.4] - 2024-05-07

### Changed
* Fix LatestLaunch class

### Added
* Add border / box-shadow to LaunchStatus
* Add :hover effect to LaunchBox copy button

## [2.2.3] - 2024-05-06

### Changed
* Adjust formatTime() in helperFunctions.js so 0 is shown for seconds

## [2.2.2] - 2024-05-05

### Changed
* Remove animation logic from Error component

### Added
* Create LaunchStatus component, add to SearchLaunches and LaunchBox components

## [2.2.1] - 2024-05-02

### Changed
* Add wriggle animation to Error component
* Fix how data is conditionally rendered in SearchLauches, since it's an object and not an array

## [2.2.0] - 2024-04-29

### Changed
* Add data-success attribute to LaunchBox component
* Adjust LatestLaunches and Pagination component logic in regards to launches and pagination

### Added
* Create Filter component, add to LatestLaunches component
* Add hidden-visually mixin

## [2.1.4] - 2024-04-24

### Changed
* Added additional scrollToHash helper function to LatestLaunches component, so clicking on pagination scrolls to the component instead of scrolling to the top

## [2.1.3] - 2024-04-23

### Changed
* Style SearchBar input cancel button /w FontAwesome icon
* Add logic to cancel button, thus only showing it when user enters search value

## [2.1.2] - 2024-04-15

### Changed
* Add basic input validation to SearchBar input
* Replace basic error message for SearchLaunches /w reusable component

### Added
* Add Error component
* Add global mixin file that imports all other possible mixins

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
