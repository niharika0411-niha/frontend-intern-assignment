This project is a frontend web application designed to fulfill the requirements of the assignment using React, Vite,
Tailwind CSS, React Router, and Context API with JSON mock data.
The application consists of three main pages:

Login Page:
A clean and styled login form with a banner. The login state is managed using React Context API, enabling global 
authentication state management across the app.

Admin Dashboard:
This page serves as the admin's control panel. It features informational cards summarizing key metrics like total applied jobs,
employee count, recent activity, etc. The dashboard is designed with responsiveness and usability in mind using Tailwind CSS
utility classes.

User List Page:
Displays a list of users with advanced UI features such as filters to search or sort users, dropdown menus for actions or 
category selections, and popup modals to view detailed user profiles without leaving the page.

Technologies & Tools
React + Vite:
Vite is used as the build tool and development server for its blazing-fast hot reload and optimized builds. 
React is the core library for building the UI components with a modular and component-based architecture.

Tailwind CSS:
For styling, Tailwind provides a utility-first approach that enables quick, consistent, and responsive design without 
writing custom CSS for every element.

React Router DOM:
Handles client-side routing to switch between Login, Dashboard, and User List pages smoothly.

Context API:
Manages global state, particularly the user authentication status, making the login state accessible across components 
without prop drilling.

JSON Mock Data:
Instead of a backend, the user and job data are stored locally as JSON files or objects to simulate fetching and displaying
real data.

Popup Modal:
Implemented for user profile details on the User List page, enhancing user experience by showing information overlays instead
of navigation.

Features and UX Details
Login Page:
Styled input fields with validation
Banner with branding or relevant image
On successful login, redirect to Admin Dashboard

Admin Dashboard:
Summary cards showing key stats (jobs applied, employees, etc.)
Responsive grid layout
Easy navigation to User List page

User List Page:
Table or card layout of users
Filters for role, status, or other attributes
Dropdown actions for each user (edit, delete, view)
Modal popup to show user profile details without page reload

This approach balances clean architecture, usability, and maintainability while adhering to the assignment requirements. 
The modular structure and modern React patterns ensure the app can be extended or integrated with backend services in the 
future.
