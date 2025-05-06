# Loan Calculator SPA

## Overview
The Loan Calculator SPA is a web application built with **ReactJS** and **Material UI** that calculates **EMI (Equated Monthly Installment)**, displays an **amortization schedule**, and allows real-time **currency conversion** using an **ExchangeRate API**. It features light and dark themes, error handling, and routing with React Router.

You can access the live version of the app here: [Loan Calculator](https://harshith07-dot.github.io/loan-calculator)

## Tech Stack
- **ReactJS**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React component library for UI design.
- **Axios**: For making HTTP requests to external APIs.
- **React Router**: For routing and navigation within the app.
- **gh-pages**: For deploying the app to GitHub Pages.
- **ExchangeRate API**: For converting the EMI values to multiple currencies.
- **React Context API**: For managing global state, including theme (light/dark mode) and selected currency.

## Features
- **EMI Calculation**: Calculates EMI using the standard formula.
- **Amortization Schedule**: Displays a table showing a breakdown of principal, interest, and remaining balance for each month.
- **Currency Conversion**: Converts EMI to multiple currencies using live exchange rates.
- **Theming**: Toggle between light and dark themes.
- **Error Handling**: Handles errors gracefully and shows a fallback UI.
- **Routing**: Routes for Calculator, Exchange Rates, About, and Error pages.

## Live Demo
You can view the live version of the app here:  
[Loan Calculator SPA Live Demo](https://harshith07-dot.github.io/loan-calculator)

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshith07-dot/loan-calculator.git
2.Install dependencies:

npm install

3.Start the development server:

npm start

4.Open the application in your browser at http://localhost:3000.
Pages
/ (Home): The main page that includes the EMI calculator and amortization schedule.

/exchange-rates: Shows a table with live exchange rates for multiple currencies.

/about: Contains information about the project and its features.

/error: A page that shows when an error occurs intentionally.

/404 (Not Found): A custom 404 page when an invalid route is accessed.

Theming
The application supports light and dark modes.

Use the ThemeProvider from Material UI to toggle between the themes.

Error Handling
An Error Boundary is used to handle any errors that may occur and displays a fallback UI.

Custom error pages (e.g., /error) are implemented for better user experience.

Responsiveness
The app is fully responsive using Material UI's Grid, Box, and useMediaQuery hooks.

The navbar collapses on smaller screens, making it mobile-friendly.

How to Deploy
To deploy your app to GitHub Pages:

npm run deploy
This command will build the project and push the build files to the gh-pages branch of your GitHub repository.

Your app will be live on GitHub Pages at https://<username>.github.io/<repo-name>.

Challenges Faced
CORS issues: While integrating the ExchangeRate API, I faced some CORS-related issues. I resolved this by using proxy settings in package.json during local development and configured the server to allow cross-origin requests in the production build.

Responsive Design: Ensuring the app looked good across different screen sizes and devices was a challenge, but I leveraged Material UI's Grid system and breakpoints to achieve this.

Future Enhancements
User Authentication: Adding user authentication and profile management to store historical loan calculations.

Advanced Reports: Allowing users to download the amortization schedule and EMI calculations in a PDF or CSV format.

More Currencies: Support for more currencies and additional features like selecting base currency.

License
This project is licensed under the MIT License.

Author
Harshith07-dot (GitHub: Harshith07-dot)