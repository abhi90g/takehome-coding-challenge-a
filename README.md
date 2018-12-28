# AquisitionsTargetTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.  

## Instruction to Run the application  
clone the repository in you local  
run <code>npm install</code>  
<code>ng serve</code> to run on default localhost:4200 or specify using <code>ng serve --port=''</code>  
  
## Live version of this app  
https://abhi90g.github.io/angular-AquisitionsTracker/  
  
## My process for building this app  
I have kept this app very simple with the functionalities specified. Few things I would like to focus on:  
* I tried to cover all the basics of the Angular framework such as routing, using scaffolding to generate components and services, using reusable components such as 'modal' component.  
* Instead of using angular based libraries to build components I have used basic html, javascript and SCSS preprocessor.  
* Color scheme has been kep very close to the palette provided.  
  
I particularly took sometime to figure out mocking the backend using mock data I constructed. Initially I used 'json-server' for this which can still be used in this application. This json-server can be run in the project directory through <code>json-server --watch src/assets/MOCK_DATA.json</code>  
  
I am proud of the simplistic design and covering all the requirements as specified for this app. I also took this opportunity to use data visualization library 'Chart.js' to construct line charts for each target data.  
There is definitely room for much improvement here to improve the styles and add sophisticated interface to build an entire dashboard, but in my view I wanted to focus more on the basics and display my knowledge of not only angular but with vanilla javascript.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
