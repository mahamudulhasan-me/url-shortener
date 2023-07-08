# URL Shortener Project

This project is a URL shortener application built with React.js. The goal of the project is to provide users with a simple tool to shorten long URLs into shorter, more manageable links.

## Features

- User Interface: The React.js frontend allows users to enter a long URL and generate a corresponding short link.
- Shortening Algorithm: The server-side component generates a unique short identifier using the `shortid` library and appends it to a base URL to create the shortened link.
- Link Storage: The link history, consisting of the original long URL and the corresponding short link, is stored in the browser's local storage for persistent access.
- Redirection: When a user clicks on a short link, the server redirects them to the original long URL using a server-side route that matches the short link identifier.
- Edit Page: The Edit page allows users to delete a short URL from the link history, providing a convenient way to remove unwanted links.
- List Page: The List page displays all the short URLs that have been created. Clicking on a short URL opens the corresponding long URL in a new tab.

## Technologies Used

- React.js: Used to create the user interface and handle user interactions.
- JavaScript: handle URL shortening, redirection, and link deletion.
- `shortid` library: Generates unique short identifiers for the shortened links.
- Local Storage: Stores the link history in the browser's local storage for persistence.

## Usage

1. Enter a long URL in the input field.
2. Click the "Shorten URL" button to generate a shortened link.
3. The shortened link will be displayed, along with the original long URL.
4. Click on a short link to be redirected to the corresponding long URL.
5. Access the Edit page to delete unwanted short URLs from the link history.
6. Navigate to the List page to view all the created short URLs. Clicking on a short URL will open the corresponding long URL in a new tab.

## Setup

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application in your web browser at `http://localhost:5173/`.
