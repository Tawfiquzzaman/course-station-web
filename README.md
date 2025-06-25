# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Project Name: Course Station

Key Features:
1. To provide best courses to the students
2. Best user interface to the user
3. Easy to use interface
4. Can do modification easily

Purpose: Enroll to the courses got easier then before.

=======
## Live Site Link: https://mrtopic-course-station.netlify.app/

## Description:
CourseStation is a full-stack course management platform inspired by e-learning sites like Udemy. It allows users to browse, enroll in, and manage online courses. The application features user authentication, secure data handling, and a user-friendly interface for both learners and instructors.

## Web page

![image](https://github.com/user-attachments/assets/f62a2386-8083-4bf6-aa7c-402e33a064fd)

![image](https://github.com/user-attachments/assets/2e592140-12b7-4b17-ab74-297d80c82b2b)



## 🔍 Key Features

- 🎓 **Course Management** – Add, edit, and delete courses with detailed information.
- 📚 **Browse Courses** – View all available courses with real-time updates.
- 📝 **Enroll in Courses** – Users can enroll in courses with limited seat capacity.
- ❌ **Seat Limit Handling** – Prevents enrollment once all seats are filled.
- 👤 **User Dashboard** – View enrolled courses and track your learning journey.
- 👨‍🏫 **Instructor Features** – Instructors can manage courses they’ve created.
- 🔐 **Authentication System** – Secure login and signup using Firebase (Email/Password, Google, GitHub).
- 📈 **Real-time UI Feedback** – Instant visual feedback using SweetAlert2 and Lottie animations.
- ⚙️ **Protected Routes** – Role-based access control for users and instructors.
- 💬 **Course Details Page** – Displays title, description, available seats, and more.

## 🛠️ Technology Stack

### 💻 Frontend
- **ReactJS** – JavaScript library for building user interfaces
- **React Router** – Declarative routing for React applications
- **Axios** – For making HTTP requests to the backend
- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **Lottie-react** – For animations using JSON-based Lottie files
- **SweetAlert2** – Beautiful and customizable alert popups

### 🖥️ Backend
- **Node.js** – Runtime environment for executing JavaScript on the server
- **Express.js** – Web framework for building RESTful APIs
- **MongoDB** – NoSQL database for storing course and user data
- **Mongoose** – ODM for MongoDB, simplifying schema and query handling

### 🔐 Authentication & Security
- **Firebase Authentication** – Email/Password, Google, and GitHub login support
- **JSON Web Tokens (JWT)** – For secure, role-based access and route protection

### ☁️ Deployment
- **Netlify** – Hosting the React frontend
- **Vercel** – Hosting the Node.js/Express backend


## 📦 Dependencies

### 💻 Frontend
- **react** – Core library for building UI components
- **react-dom** – DOM rendering for React components
- **react-router-dom** – For client-side routing
- **axios** – To make HTTP requests to the backend
- **firebase** – For authentication (Email/Password, Google, GitHub)
- **jwt-decode** – Decode and access JWT payloads
- **tailwindcss** – Utility-first CSS framework
- **sweetalert2** – Beautiful alert dialogs
- **lottie-react** – For rendering Lottie animations
- **react-helmet** – Manage document head (title, meta tags)

### 🛠️ Backend (Node/Express App)
- **express** – Framework for building REST APIs
- **mongoose** – MongoDB ODM for schema modeling
- **cors** – Middleware to enable CORS
- **dotenv** – Load environment variables from `.env`
- **jsonwebtoken** – For signing and verifying JWTs
- **bcryptjs** – For hashing user passwords
- **nodemon** (dev) – Automatically restarts server during development

> 💡 Run `npm install` in both frontend and backend directories to install all dependencies listed in the respective `package.json` files.


## ✨ Main Features

- 🎓 **Course Creation** – Instructors can add new courses with details like title, description, and seat limit.
- 📚 **Course Browsing** – Users can browse all available courses from the homepage.
- 📝 **Enroll in Courses** – Authenticated users can enroll in courses with limited seats.
- 🚫 **Seat Management** – Automatically disables enrollment when no seats are left.
- 👤 **User Dashboard** – Displays courses the user has enrolled in or created.
- 🔐 **Authentication** – Secure login/signup using Firebase (Email/Password, Google, GitHub).
- ⚙️ **Protected Routes** – Ensures only authorized users can access certain pages.
- 📊 **Course Details Page** – Shows all course info like description, instructor, seats left, etc.
- 🧼 **Clean UI** – Responsive and modern interface using Tailwind CSS and Lottie animations.

## 🚀 How to Run This Project Locally

Follow the steps below to set up and run **Hobby-hub** on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hobby-hub.git
cd hobby-hub

## Install Dependencies
npm install

##Configure Environment Variables
VITE_API_BASE_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

## Start the React App
npm run dev
The app will run at: http://localhost:5173
