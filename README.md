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

## Demo

The Day News App provides an intuitive and engaging user experience:

### Authentication Screens
The app features clean, user-friendly authentication screens for signing up and logging in.
![photo_2025-04-26_23-03-07](https://github.com/user-attachments/assets/3766e470-7054-4179-a888-f7079822d13f)
![photo_2025-04-26_22-54-23](https://github.com/user-attachments/assets/d3d6db99-9c44-4fac-a5f6-10071165a96b)

### News Feed
The main news feed displays articles based on your selected interests and preferences.
![photo_2025-04-26_23-04-19](https://github.com/user-attachments/assets/224880ff-9014-468c-924b-23041e709eae)

### Interest Selection
Easily manage your interests to customize your news experience.
![photo_2025-04-26_23-05-24](https://github.com/user-attachments/assets/95b42dc4-1439-45e8-8250-e520ae73d53d)

## Installation
1. Clone the repository to your local machine
2. No additional installation is required, as this is a client-side application
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
