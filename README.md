# 📝 To-Do List Web Application

This is a simple and clean to-do list web application built with **Node.js**, **Express.js**, and **MongoDB**. Users can add and delete items dynamically, and the list is stored persistently in a MongoDB database.

## ⚙️ Features

- Add new items to the list
- Delete completed items with checkbox
- Automatically inserts default items when the list is empty
- Displays current day using a custom date module
- Separate route for a "Work List"
- Responsive front-end using EJS templates
- Uses MongoDB for data persistence

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web server framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM library for MongoDB
- **EJS** – Template engine for rendering dynamic HTML
- **Body-Parser** – Parses form data
- **Custom Date Module** – Provides current day formatting
- **HTML/CSS** – UI design in `views` and `public` folders

## 📁 Project Structure
📦project-root
┣ 📂views
┃ ┣ 📜list.ejs
┃ ┗ 📜about.ejs
┣ 📂public
┃ ┣ 📂css / images / js (static assets)
┣ 📜app.js
┣ 📜date.js
┗ 📜package.json


## 🚀 How to Run the Project

1. Clone this repository:

```bash
git clone https://github.com/mustofyou/todolist-v1.git
cd todolist-v1
2. install dependencies:
npm install
4. Start the server:
node app.js / nodemon app.js
5. Visit http://localhost:3000 in your browser
```

✅ Skills Demonstrated
Building a RESTful CRUD application
Integrating MongoDB with Mongoose
Creating and using custom modules (e.g., date.js)
Dynamic UI rendering with EJS
Middleware usage (body-parser, static files)
Clean routing with Express
📌 Notes
If the database is empty on first run, default items will be automatically inserted.
You can extend this project by adding user authentication, multiple lists, or even a React frontend.

Feel free to contribute or fork the project!
