# Alridha Alqattan – Assignment 4

## Personal Portfolio Website

This project is a responsive personal portfolio website built with React, JavaScript, HTML, CSS, and Vite. It presents personal information, selected academic projects, GitHub repositories, contact information, and interactive programming content.

## Live Website

**Vercel URL:** `[ADD YOUR FINAL VERCEL URL HERE]`

## Features

- Navigation links to the main portfolio sections.
- About section with personal and academic information.
- Projects section with project descriptions and images.
- Contact form with required-field and email validation.
- GitHub repository section using the GitHub REST API.
- Sorting repositories by newest or oldest creation date.
- Programming joke section using JokeAPI.
- Loading and error messages for API requests.
- Live date and time display.
- Collapsible content sections.
- Responsive layout for desktop, tablet, and mobile screens.

## Technologies Used

- React
- JavaScript
- HTML/JSX
- CSS
- Vite
- GitHub REST API
- JokeAPI

## Running the Project Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository.
2. Open a terminal in the project directory.
3. Install the dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Open the local URL displayed in the terminal.

### Production Build

Run `npm run build` to create the production build in the `dist/` directory. Run `npm run preview` to preview the production build locally.

## Project Structure

```text
202344650-AlridhaAlqattan-assignment4/
├── public/assets/
│   ├── file-system.webp
│   └── webdev.webp
├── src/
│   ├── assets/kfupm-logo-300x284.webp
│   ├── components/
│   │   ├── Box.jsx
│   │   ├── Box.css
│   │   ├── Contact.jsx
│   │   ├── JokeBox.jsx
│   │   ├── ReposBox.jsx
│   │   └── TimeDate.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── docs/
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## API Integration

- **GitHub REST API:** Retrieves public repositories for the portfolio owner and displays their names, languages, creation dates, and links.
- **JokeAPI:** Retrieves single programming jokes. The interface shows loading feedback while a request is in progress and an error message if the request fails.

The application handles unsuccessful requests without preventing the rest of the website from loading.

## Testing

The website was tested for desktop and mobile layouts, navigation, collapsible sections, contact-form validation, repository loading and sorting, programming-joke loading and retry behavior, API loading and error states, image display on Vercel, and successful production builds.

## AI Usage

AI tools were used as development and learning assistance for React explanations, debugging, API integration, testing guidance, and documentation organization. Suggestions were reviewed and tested before being used. Detailed information is available in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Academic Integrity

AI assistance was reviewed, adapted, and tested by the student. The student is responsible for understanding and explaining the submitted implementation. Complete AI conversations and intermediate artifacts must be submitted separately as required by the course instructions and should not be committed to this repository.
