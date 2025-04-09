# 📋 Advanced To-Do App with React, Redux, and TailwindCSS

An advanced **To-Do List Application** built using **React, Redux Toolkit, Redux Thunk, and Tailwind CSS**. This app features **task management, priority sorting, authentication, API integration, and weather fetching for outdoor tasks**.

**Live Demo:** [Click here to view the app](https://advanced-todo-app-beige.vercel.app/)

##  Features Implemented
### **Core Features**
- **Add, Edit, Delete Tasks** 
- **Mark tasks as completed** 
- **Sort tasks by priority** (High → Medium → Low)
- **LocalStorage support** for persistence 

### 🔐 **Authentication (Mocked using Redux)**
- **Login & Logout functionality** 
- **Only logged-in users can access tasks** 

### 🌦 **Weather API Integration**
- **Fetches weather for outdoor tasks**
- Uses **OpenWeather API** to fetch temperature & conditions.

### 🎨 **Beautiful UI & Responsive Design**
- **TailwindCSS** for styling 
- Fully **mobile-friendly** 

---

## 🛠️ **Tech Stack**
- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **State Management:** Redux & Redux Thunk
- **API Calls:** Axios (for weather data)
- **Persistent Storage:** LocalStorage

---

## 📸 **Screenshots**
### 🔑 Login Page
![Login](screenshots/Login.png)

### 📋 Task List (Authenticated)
![Task List](screenshots/Task_list.png)

### Responsive Design
![Responsive](screenshots/ResponsiveLogin.png)
![Responsive2](screenshots/Responsive_Task_list.png)

---

## **Setup & Installation**

Follow these steps to **run the project locally**.

- git clone https://github.com/your-username/advanced-todo-app.git
- cd advanced-todo-app
- npm install
- WEATHER_API_KEY=your_openweather_api_key(in todoSlice file)
- npm run dev

