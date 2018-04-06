# Canvas (CNVS)

## Description
Canvas is a mockup for a social media platform dedicated to artists and creatives. It's intended to give users a platform for displaying a sharing their work, connecting and collaborating with other artists, as well as finding and promoting events related to their work.

* Note: this site is still being developed, but I'd love for you to check out what I have built so far.

## Structure
Canvas' primary features are:
* a discovery page that displays searchable and filterable projects that have been uploaded to the platform
* an events page where a visitor can view events organized by month
* user authentication which unlocks the ability to create an artist profile, upload new projects to the platform, or publish events to the calendar
* artist profiles that show users information

Incomplete features:
* adding new projects and events to the site
* the ability to leave comments on projects
* displaying a specific users projects on their profile page

## Known Bugs
* at this time if you register for the site you will encounter bugs with a number of sites user-specific features. To demo these features you may sign in with these credentials: email: exampleuser1@email.com password: password


## Prerequisites

You will need the following software properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [TypeScript](https://www.typescriptlang.org/)

## Installation

* Clone this repository

  `$ git clone https://github.com/wh0pper/canvas`

* Run the following command from the root directory:

  `$ npm install`

This will download the project's dependencies

## Firebase Setup/Configuration

* Sign into the [firebase console](https://firebase.google.com/) and create a new project, then select "Add firebase to your web app". You will be presented with the following information to be added to the project in `src/app/api-key.ts`

  ```
  export const masterFirebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
  };
  ```  

## Running / Development

Once the project is installed and your local dev environment is configured correctly, you can start the server.

* Run `$ ng serve`
* Visit your app at http://localhost:4200.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
