# About

Project Overview

This is a Contact Management Web Application developed using Angular (Frontend) and .NET Web API (Backend). The app allows users to add, view, and delete contacts while displaying them in a structured layout. It uses Bootstrap for styling, ensuring a responsive and modern UI.

🛠️ Tools & Technologies Used

1️⃣ Frontend: Angular

Angular 16 - Framework for building dynamic web applications.
Bootstrap 5 - Used for styling (buttons, layout, icons).
TypeScript - Strongly typed programming language for Angular development.
RxJS (Reactive Extensions for JavaScript) - Handles HTTP requests and async operations.
Angular Forms (Reactive & Template-Driven) - Used for adding contacts.
Icons (Bootstrap Icons) - Added icons for UI enhancements (Call & Delete buttons).

2️⃣ Backend: .NET Web API

ASP.NET Core Web API - Manages backend logic, handles CRUD operations.
Entity Framework Core (EF Core) - ORM for database interactions.
SQL Server - Stores contact details.

3️⃣ Development Tools

Visual Studio 2022 - Used for .NET backend development.
Visual Studio Code (VS Code) - Used for Angular frontend development.
Postman - For testing API endpoints.
Node.js & NPM - Required for Angular development.

📌 Features of the Application
✅ Add Contacts - Users can enter contact details via a form.
✅ Display Contacts - List of contacts shown on the left side of the screen.
✅ Call & Delete Buttons 
                           Call: Opens the phone dialer with the contact number.
                           Delete: Removes the contact from the list.
✅ Dynamic UI using Bootstrap - Ensures responsive design.
✅ TrackBy for Optimization - Used in *ngFor to improve performance.

# ContactVaultWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
