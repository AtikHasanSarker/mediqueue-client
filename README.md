# MediQueue

MediQueue is a tutor booking platform frontend built with Next.js 16, HeroUI, and Better Auth. It helps students discover tutors, book sessions, and manage appointments, while enabling tutors to share profiles, update availability, and track bookings.

## Live Demo

https://mediqueue-ruby-seven.vercel.app

## Project Overview

The frontend is designed around a responsive learning marketplace experience:

- Public homepage with featured tutors, trust metrics, and service overview
- Searchable tutor listing with keyword and date filters
- Tutor detail cards with session booking modal
- Authenticated flows for login, registration, profile, and tutor management
- Booked sessions dashboard for students
- Tutor management pages for adding, editing, and deleting tutor listings

## Key Features

### Student Experience

- Browse available tutors
- Search tutors by keyword and filter by date
- Book tutoring sessions directly from tutor cards
- View and cancel booked sessions
- Responsive UI for mobile, tablet, and desktop

### Tutor Experience

- Add a new tutor profile with availability and pricing
- Manage tutor listings from a protected dashboard
- Edit or delete existing tutor profiles
- See booked sessions and session status

### Authentication

- Email/password registration and login
- Social login support via Google
- Session tracking with Better Auth JWT plugin
- Protected route handling using server-side session state

## Tech Stack

- Frontend: `next`, `react`, `tailwindcss`, `@heroui/react`
- UI: `HeroUI`, `react-icons`, `react-hot-toast`
- Auth: `better-auth`, `@better-auth/mongo-adapter`
- Styling: Tailwind CSS v4
- Utilities: `date-fns`, `react-day-picker`, `swiper`, `lottie-react`

## Folder Structure

- `src/app/` — Next.js app routes
- `src/components/` — reusable UI and page components
- `src/lib/auth-client.js` — Better Auth client configuration
- `src/assets/` — images and animation assets

## Pages

- `/` — homepage with hero, about, featured tutors, and statistics
- `/tutors` — searchable tutor listing page
- `/booked-sessions` — user booking management
- `/my-tutors` — tutor management dashboard
- `/add-tutor` — add new tutor profile
- `/auth/login` — login page
- `/auth/register` — registration page
- `/profile` — user profile management


## Author

Atik Hasan Sarker

## License

This project is created for educational purposes.