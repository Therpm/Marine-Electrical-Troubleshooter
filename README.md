# Marine Electrical Troubleshooter

This web application is an interactive troubleshooter designed to help diagnose common electrical issues on marine vessels. Users can select a problem category, identify a specific issue, and then follow a guided series of questions to arrive at a potential diagnosis and recommended actions.

## Project Purpose

This application is intended for educational and preliminary diagnostic purposes. **Always consult a qualified marine electrician for serious electrical issues or before performing complex repairs.**

Contact Information (as per application):
* Phone: 253-383-9983
* Email: MainOffice@MDmarineElectric.com

## How to Use / View

This application is designed to be deployed as a static website. Once uploaded to GitHub, it can be viewed using GitHub Pages.

1.  Ensure all project files are in the main branch of the GitHub repository.
2.  Enable GitHub Pages in the repository settings (typically deploying from the `main` branch and `/root` folder).
3.  Access the application via the provided GitHub Pages URL.
4.  This URL can then be used in a Wix iframe, as per the original deployment plan.

## Project Files

* `index.html`: The main HTML structure of the application, including the layout for categories, issues, and the troubleshooter interface.
* `styles.css`: Contains all the styling rules for the application, including MD Marine Electric branding.
* `app.js`: The core JavaScript logic for the application. It handles user interactions, navigation between sections, displaying questions, processing answers, and showing diagnoses.
* `troubleshooter-data.js`: Contains the data for the troubleshooting decision trees, including categories, issues, questions, answers, and diagnoses.
* `icons-placeholder.html` (and potentially an `icons` folder): Handles or contains icon assets for the application. (It seems `icons-placeholder.html` provides a script for placeholders if actual SVGs in an `icons/` directory are missing or not loaded).

## Setup

No special build steps are required for this version of the application. It can be run directly by opening the `index.html` file in a web browser, or by deploying it to a static web host.
