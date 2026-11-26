# Technical Documentation

## Project Overview

This project is a responsive personal portfolio web application built with React and Vite. It organizes personal information, academic projects, GitHub repositories, contact functionality, and programming content into reusable interactive sections.

## Technologies and Tools

| Technology | Purpose |
|---|---|
| React | Building reusable user-interface components |
| JavaScript | Application logic, state management, and API requests |
| HTML/JSX | Page structure and accessible content |
| CSS | Layout, responsive design, colors, spacing, and transitions |
| Vite | Development server and production build tool |
| GitHub REST API | Retrieving public repository information |
| JokeAPI | Retrieving programming jokes |
| Vercel | Hosting the deployed application |

## Application Structure

### `App.jsx`

The main application component imports the portfolio sections, assets, and reusable components. It contains the navigation, About, Projects, Repositories, Contact, and Programming Joke sections.

### `Box.jsx`

`Box` is a reusable collapsible component. It receives a title and content through props and uses React state to show or hide each section.

### `TimeDate.jsx`

This component displays the current date and time. A timed effect updates the displayed values every second and clears the interval when the component is removed.

### `Contact.jsx`

This component displays the contact form and validates the required name, email, and message fields. It shows an error message when input is incomplete or invalid and displays confirmation feedback after valid submission. The form currently provides client-side demonstration and validation feedback; it does not connect to an email server or permanently store messages.

### `ReposBox.jsx`

This component requests public repositories from the GitHub REST API. It displays repository names, main languages, creation dates, and links. Loading and error states are handled, and users can sort the results by newest or oldest creation date.

### `JokeBox.jsx`

This component requests a single programming joke from JokeAPI. It manages the joke content, loading state, and error state. Users can request another joke after the initial request.

## Asset Handling

The KFUPM logo is imported from `src/assets` so Vite can process it during the build. Project images are stored in `public/assets` and are referenced through public asset paths. This ensures that the images are available in the deployed Vercel application.

## State Management

React `useState` manages date and time values, section visibility, contact-form feedback, repository data and sorting, and joke content with its loading and error states. React `useEffect` is used for timed updates and for loading API data when the relevant components are mounted.

## Error and Loading Handling

The API components display loading feedback while requests are in progress. Failed requests are caught and shown as readable messages instead of breaking the entire page. The rest of the portfolio remains usable when an external API is unavailable.

## Responsive Design and Accessibility

The layout uses flexible widths and mobile media rules to support desktop, tablet, and phone screens. The website was tested using browser device emulation at mobile and desktop sizes. Images include alternative text, form controls have labels, and interactive controls can be reached using keyboard navigation.

## Performance

The project uses compressed WebP images, separate React components, and Vite's production build process. The production build is generated with `npm run build`.

## Local Execution

1. Install Node.js and npm.
2. Run `npm install` in the project directory.
3. Run `npm run dev` to start the development server.
4. Run `npm run build` to create the production build.
5. Use `npm run preview` to preview the production build locally.
