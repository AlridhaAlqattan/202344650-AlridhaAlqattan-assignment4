# Technical Documentation

## Assignment Overview

The Personal Portfolio Website is a React-based web application designed to present personal information, projects, and contact details through a structured user interface.

The application uses separate React components to organize different sections and improve code readability and maintainability.

Compared to Assignment 2, additional functionality has been introduced, including GitHub repository retrieval, improved data handling, and performance optimizations.

## Technologies and Tools

| Technology | Purpose |
|---|---|
| React | Building the user interface with components |
| JavaScript | Implementing application logic and interactions |
| HTML/JSX | Defining the page structure |
| CSS | Styling and layout |
| GitHub REST API | Retrieving GitHub repository information |
| Official Joke API | Retrieving programming jokes |
| Vite | Running the development server and building the application |

## Application Structure

The application uses React components to separate different responsibilities.

### App.jsx

`App.jsx` serves as the main application component. It organizes the portfolio's main sections and combines the components needed to display the website.

The interface includes navigation and sections for About, Projects, Contact, GitHub Repositories, and Programming Jokes.

It also imports the required components and assets used throughout the website.

### TimeDate.jsx

`TimeDate.jsx` is a separate component responsible for displaying the current date and time.

React's `useState` hook stores the displayed date and time, while `useEffect` manages the updating process.

### Contact.jsx

`Contact.jsx` is a separate component responsible for displaying the Contact box and handling form validation.

React's `useState` is used to manage error messages and user input. It also handles clearing the information and displaying a confirmation message when the form is submitted correctly.

### JokeBox.jsx

`JokeBox.jsx` is a separate component responsible for displaying programming jokes fetched from an external API.

The component uses error handling to catch problems when fetching data from the API. Additionally, it uses a loading state to show a loading message while the joke is being retrieved.

React's `useState` and `useEffect` are used to display the fetched joke and manage the process of retrieving another joke when the user presses the `Get Another Joke` button.

### ReposBox.jsx

`ReposBox.jsx` is a separate component responsible for retrieving and displaying my GitHub repositories.

It uses the GitHub REST API to retrieve public repositories from my GitHub account.

The component uses `useEffect` to fetch the repositories when the component is mounted. The retrieved data is stored using `useState`.

The displayed information includes:
- Repository name.
- Main programming language.
- Repository creation date.
- A link to view the repository on GitHub.

The component also uses loading and error states to inform the user about the status of the API request.

### Box.jsx
The `Box` component is a reusable component used to display content inside collapsible sections. It receives a `title` and `content` through props and displays the title as a clickable heading.

It uses React's `useState` hook to manage the visibility of the content. When the user clicks the title, the visibility state is toggled, allowing the content to be shown or hidden without removing the section title. The component uses `Box.css` for its styling.

This component improves the user experience by allowing users to collapse sections they do not currently need, keeping the page more organized.

### Styling

CSS files define the visual appearance, spacing, colors, layout, and transitions of the website.

Common CSS classes are used to maintain consistent styling across different sections and reduce repeated styling rules.

Images are also optimized by compressing and resizing them to reduce their file sizes.

## Main Features

### Navigation

The navigation interface allows visitors to move between the main sections of the portfolio.

### About Section

Presents personal background and relevant information.

### Projects Section

Displays selected projects and their descriptions.

### Contact Section

Provides a way for visitors to enter contact information and a message. It includes validation functionality and requires all fields to be filled.

When information is submitted correctly, a confirmation message is shown.

### Programming Joke Section

Displays a programming joke fetched from an external API and provides the user with the choice to retrieve another joke using a button.

A loading message is displayed while the joke is being retrieved, and an error message is shown if the request fails.

### GitHub Repositories Section

Retrieves public repositories from my GitHub account using the GitHub REST API.

Repository information is displayed dynamically, including the repository name, main programming language, creation date, and a link to the repository.

Loading and error messages are also implemented to handle the different states of the API request.

### Date and Time

Displays current date and time information through the `TimeDate` component.

### State Management

React's `useState` and `useEffect` hooks are used throughout the application to manage dynamic information and component behavior.

They are used to manage date and time updates, form inputs, API responses, loading states, and error messages.

## API Integration

The application uses two external APIs to retrieve dynamic information.

### GitHub REST API

The GitHub API is used to retrieve public repositories belonging to my GitHub account.

The retrieved JSON data is processed and displayed through the `ReposBox` component.

### Official Joke API

The Official Joke API is used to retrieve programming jokes, which are displayed through the `JokeBox` component.

Both API integrations include loading and error handling to provide feedback to the user.

## Performance Optimization

Several improvements are applied to make the application load faster and run more efficiently.

These include:

- Compressing and resizing large images to reduce loading times.
- Removing unused code, imports, and files.
- Reusing CSS classes to avoid unnecessary repetition.

Google Chrome Lighthouse is used to evaluate the website's performance and identify potential improvements.

## Installation and Execution

### Prerequisites

- Node.js
- npm

### Steps

1. Clone the project repository.
2. Open a terminal in the project directory.
3. Install the dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local address printed in the terminal.
