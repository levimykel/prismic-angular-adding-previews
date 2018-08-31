# Prismic & Angular 6 - Adding Slices to the Homepage

This is the end result of following the Adding Slices to the Homepage article about integrating Angular 6 with Prismic (API-based CMS).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure that you have [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

*The Angular CLI runs best with Node.js version 8.x or greater and npm version 5.x or greater. You can verify this by running* `node -v` *and* `npm -v` *in a terminal/console window.*

You can install the Angular CLI by running the following command in your terminal.

```
npm install -g @angular/cli
```

### Installing

After downloading or cloning this project, run the following command from the root of your project files.

```
npm install
```

Then you can connect it to your Prismic repository by updating the endpoint in the `src/prismic-configuration.ts` file.

```
apiEndpoint: 'https://your-repo-name.prismic.io/api/v2',
```

Make sure that you've created some content in your repository as described in the Prismic & Angular 6 articles.

### Running the project

To launch the project in your local environment, run the following command.

```
ng serve --open
```

## Built With

* [Angular](https://angular.io/) - Front-end web application platform
* [Prismic](https://prismic.io/) - Headless API-based CMS
