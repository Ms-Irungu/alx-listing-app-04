# ALX Listing App 🏡

The **ALX Listing App** is a modern, scalable web application built to simulate an Airbnb-style property listing platform. Developed using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**, this project lays the groundwork for a responsive and maintainable listing page, setting the stage for more advanced functionality in future milestones.

---

## 🚀 Project Goals

- Scaffold a clean and scalable Next.js project tailored for production readiness.
- Implement TypeScript to enforce type safety and ensure consistent, bug-free code.
- Use TailwindCSS to create beautiful, responsive UI components quickly.
- Create a well-structured folder architecture for long-term scalability and readability.
- Build reusable UI components such as **Card** and **Button** to streamline development.

---

## 🗂️ Project Structure

Here’s a quick breakdown of the key folders:

### `/components`
Contains reusable UI components such as:
- `common/Card.tsx`: Displays property details.
- `common/Button.tsx`: Handles button actions like "Book Now", "Learn More", etc.

### `/interfaces`
Houses all the TypeScript interface definitions used throughout the project (e.g., `CardProps`, `ButtonProps`). This ensures strong typing and improved code maintainability.

### `/constants`
Stores constant values like API endpoints, configuration settings, and UI strings to centralize and reuse important data.

### `/public/assets`
Contains static assets such as images and SVGs used throughout the application. These assets can be accessed via public URLs in the app.

---

## 🛠️ Getting Started Locally

To run the project on your local machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
```

### 2. Install Dependencies
Make sure you have Node.js v16+ installed, then run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The app will now be running on http://localhost:3000 🚀

## 🧠 Tech Stack
Next.js – React framework for server-side rendering and routing.

TypeScript – Type safety and scalability.

TailwindCSS – Utility-first CSS framework for rapid UI development.

ESLint – Code linting and formatting.
