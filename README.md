# ⌨️ KeyboardStack API

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

An efficient and minimalistic REST API designed to manage mechanical keyboard inventory. This project demonstrates the core concepts of backend development using Node.js, focusing on clean routes and semantic HTTP methods.

## 🚀 Features

- **List Inventory:** Retrieve all available products.
- **Add Products:** Register new keyboard models to the database.
- **Sales Logic:** Decrease stock automatically via specific endpoints.
- **RESTful Design:** Proper use of GET, POST, PATCH, and DELETE verbs.

## 🛠️ Technologies

- **Runtime:** Node.js
- **Framework:** Express.js
- **Data Handling:** JSON & JavaScript Arrays

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/estoque` | Returns all items in stock |
| `POST` | `/estoque` | Adds a new product |
| `PATCH` | `/estoque/vender/:id` | Decreases quantity of a specific item by 1 |
| `DELETE` | `/estoque/:id` | Removes a product from the list |

## 🏁 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LeonardoCides/KeyboardStack-API
   ```
2. **Install dependencies:**
   ``` bash
   npm install
   ```
3. **Start the server:**
   ```bash
   node server.js
   ```
