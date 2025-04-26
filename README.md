# NewsApp

## Overview
NewsApp is a personalized news application that allows users to create accounts, select their interests, and receive customized news content. The application fetches news from various sources using the NewsAPI and presents it in a user-friendly interface.

## Features
- **User Authentication**: Sign up and sign in functionality with form validation
- **Interest Selection**: Users can add and manage their personal interests
- **Personalized News Feed**: News content tailored to user interests
- **Country-specific News**: Browse news from different countries (Egypt, Japan, France, Italy, Canada, America)
- **Search Functionality**: Search for specific news topics
- **Date Filtering**: Filter news by date range
- **Responsive Design**: User-friendly interface that works across devices

## Installation
1. Clone the repository to your local machine
2. No additional installation is required as this is a client-side application
3. Open `signUp.html` in your web browser to start using the application

## Usage

### Authentication
1. Create a new account via the Sign Up page
2. Log in with your credentials on the Sign In page

### Setting Interests
1. After signing up, you'll be directed to the interests page
2. Add your interests one by one using the input field
3. Click "Add" to save each interest

### Browsing News
1. The home page displays news based on your selected interests
2. Use the navigation bar to view news from specific countries
3. Use the search bar to find news on specific topics
4. Filter news by date using the date range selectors
5. Click on your profile icon to view your account information

### Managing Interests
- Click "Edit Interests" to modify your interest preferences

## Project Structure

### HTML Files
- `signUp.html`: User registration page
- `signIn.html`: User login page
- `interests.html`: Page for selecting user interests
- `home.html`: Main news display page

### JavaScript Files
- `signIn&signUp.js`: Handles user authentication logic
- `interests.js`: Manages user interest selection
- `home.js`: Controls news fetching and display functionality

### CSS Files
- `signIn&signUp.css`: Styles for authentication pages
- `interests.css`: Styles for the interests page
- `home.css`: Styles for the main news page

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- [NewsAPI](https://newsapi.org/) for fetching news content
- LocalStorage for client-side data persistence

## Notes
- This application uses client-side storage (LocalStorage) to maintain user data
- An active internet connection is required to fetch news content
- A valid NewsAPI key is embedded in the application for demonstration purposes
