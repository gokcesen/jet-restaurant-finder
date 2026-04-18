# Restaurant Finder

A small React application built for the Just Eat Takeaway Early Careers Software Engineering take-home assignment.

This app allows users to search restaurants by UK postcode using the provided API and displays a limited set of restaurant information in a simple responsive interface.

## What this app does

Given a UK postcode, the app fetches restaurant data from the provided Just Eat API and displays the first 10 restaurants returned.

For each restaurant, the app shows:

- Name
- Cuisines
- Rating as a number
- Address

## Current features

- Search restaurants by UK postcode
- Fetch real data from the provided API
- Display only the required restaurant fields
- Limit results to the first 10 restaurants
- Responsive layout for desktop and mobile
- Navbar with search input
- Mobile search toggle in the navbar
- Loading skeleton while restaurant data is being fetched
- Basic search state handling:
  - empty input validation
  - loading state
  - API error state
  - no results state
  - initial empty state before search
- Footer section
- Clean mapping from raw API response to a simpler UI-friendly restaurant shape

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting started

### Prerequisites

Make sure you have these installed:

- Node.js
- npm

### Install dependencies

```bash
npm install
