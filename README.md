# Alridha Alqattan - Assignment 3

# Personal Portfolio Website

## Project Description

This project is an upgraded version of my personal portfolio website, developed using React, JavaScript, HTML, and CSS. It presents my background, projects, and contact information in a simple and organized layout.

The website includes a navigation bar, an About section, a Projects section, and a Contact section. It also includes components that display the current date and time, programming jokes fetched from an external API, and my GitHub repositories.

Compared to Assignment 2, this version introduces additional functionality, including integration with the GitHub API, more advanced data handling, interactive elements, and performance improvements.

## Features

- **Navigation:** Links to the main sections of the website.
- **About:** Introduces me and provides information about my background.
- **Projects:** Displays selected projects and relevant details.
- **Contact:** Provides a form for visitors to enter their contact information and message, with input validation.
- **Programming Joke:** Displays programming jokes fetched from an external API.
- **GitHub Repositories:** Fetches and displays my public GitHub repositories using the GitHub REST API, including their names, main programming languages, creation dates, and links.
- **Live Date and Time:** Displays the current date and time using a separate React component.
- **Interactive Sections:** Allows visitors to interact with website elements and show or hide content.
- **Responsive Design:** Designed to provide a usable experience across different screen sizes.
- **Loading and Error Handling:** Displays loading messages while retrieving API data and error messages if a request fails.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- GitHub REST API
- Official Joke API (Note: the API was down when this assignment was completed)
- Vite

## Setup Instructions

### Prerequisites

Install Node.js and npm before running the project.

### Installation

1. Clone the repository:

   `git clone https://github.com/AlridhaAlqattan/202344650-AlridhaAlqattan-assignment3`

2. Navigate to the project directory:

   `cd 202344650-AlridhaAlqattan-assignment3`

3. Install the dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal in your browser.

## Project Structure

```text
project/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── src/
│   ├── assets/
│   │   ├── file-system.webp
│   │   ├── kfupm-logo-300x284.webp
│   │   └── webdev.webp
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── JokeBox.jsx
│   │   ├── ReposBox.jsx
│   │   ├── Box.jsx
│   │   ├── Box.css
│   │   └── TimeDate.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

The project structure above is illustrative. Some files are not shown for simplicity.

## API Integration

The website uses external APIs to retrieve and display dynamic information.

- **GitHub REST API:** Retrieves my public GitHub repositories and displays information about them, including their names, programming languages, creation dates, and repository links.
- **Official Joke API:** Retrieves programming jokes and displays them on the website.

Both API integrations include loading and error messages to provide feedback to visitors when requests are being processed or fail.

## Performance

Performance improvements are applied to make the website load faster and run more efficiently.

These include:
- Compressing and resizing images to reduce their file sizes.
- Removing unused code, imports, and files.
- Reusing CSS classes and React components to avoid unnecessary repetition.

The website is also tested using Google Chrome Lighthouse to evaluate its performance.

## AI Usage

AI tools were used as development assistance for understanding React concepts, troubleshooting code, implementing features, and improving project documentation. AI-generated suggestions were reviewed, modified, and tested as needed.

Detailed information about AI usage, including the tools used, their purposes, and modifications made, is provided in `docs/ai-usage-report.md`.

## Assignment 3 Requirements Met

### API Integration
- GitHub repositories are retrieved and displayed using the GitHub REST API.
- Programming jokes are retrieved from an external API.
- Loading and error messages are implemented for API requests.

### Complex Logic
- Contact form validation checks user inputs before submission.
- API responses are handled and displayed dynamically.
- Repository information is processed and displayed.

### State Management
- React state is used to manage dynamic content.
- Loading and error states are managed when retrieving API data.
- Interactive website elements respond to user actions.
- Boxes are hideable or showable by clicking on the title of each section

### Performance
- Images are compressed and resized to reduce loading times.
- Unused code is removed.
- CSS and React components are organized to reduce repetition.
- Performance is evaluated using Lighthouse.

### Code Quality
- Components are organized into separate files.
- Code is properly structured and indented.
- Unnecessary code is removed.

