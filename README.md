# Sarswati Welding Works

A modern, full-stack web application designed for Sarswati Welding Works. This platform showcases their premium iron fabrication portfolio (including Iron Doors, Windows, Stairs, and Shades) and provides a direct enquiry system for prospective clients.

---

## 🔗 Live Preview

**[ Live Preview Link ]( https://sarswati-welding-works.netlify.app/ )**

---

## ✨ Key Features

- **Premium Dark UI**: Built with Tailwind CSS, featuring glassmorphism elements, smooth hover animations, and a responsive design that looks stunning on mobile and desktop.
- **Dynamic Portfolio Gallery**: Filter and view completed works across multiple categories.
- **Service Enquiry System**: Integrated with `emailjs-com` for instant communication directly from the website.
- **Admin Dashboard (Dev Mode)**: Secure login system utilizing JWT authentication to upload new portfolio items and container categories directly to the database.

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- EmailJS
- Context API (State Management)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) for authentication
- Multer & Cloudinary (for image handling)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and MongoDB installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd PROJECT
   ```

2. **Setup the Backend:**
   ```bash
   cd Backend
   npm install
   ```
   *Create a `.env` file in the Backend folder with your MongoDB URI, JWT secret, and port.*

3. **Setup the Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```
   *Create a `.env` file in the frontend folder with the following variables:*
   ```env
   VITE_BASE_URL=http://localhost:<YOUR_BACKEND_PORT>
   VITE_EMAILJS_SERVICE_ID=<YOUR_SERVICE_ID>
   VITE_EMAILJS_TEMPLATE_ID=<YOUR_TEMPLATE_ID>
   VITE_EMAILJS_USER_ID=<YOUR_PUBLIC_KEY>
   ```

### Running the Project

1. **Start the backend server:**
   ```bash
   cd Backend
   npx nodemon
   ```

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

---

## 🔒 Security Note
The **Admin Login** route (`/login`) is deliberately hidden and restricted in production builds. It will only render while running the development server (`npm run dev`) to ensure maximum security of your upload forms.

## 📄 License
This project is proprietary.
