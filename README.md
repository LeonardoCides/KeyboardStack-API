# ⌨️ KeyboardStack API

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

An efficient and minimalistic REST API designed to manage mechanical keyboard inventory. This project demonstrates backend development using Node.js and persistent data storage with MySQL.

## 🚀 Features

- **Inventory Management:** Full CRUD (Create, Read, Update, Delete) for keyboard stocks.
- **Sales Logic:** Decrease stock automatically with built-in validation (prevents negative stock).
- **Persistent Storage:** Data is safely stored in a MySQL database.
- **Auto-Setup:** Automatic table creation on server startup.

## 🛠️ Technologies

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL (using `mysql2` with Promise support)
- **Data Handling:** SQL Queries & JSON

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/estoque` | Returns all items from the database |
| `POST` | `/estoque` | Adds a new product |
| `PATCH` | `/estoque/vender/:id` | Decreases quantity by 1 (Sales logic) |
| `POST` | `/estoque/:id` | Increments stock quantity by 1 |
| `DELETE` | `/estoque/:id` | Removes a product from the database |

## 🏁 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LeonardoCides/KeyboardStack-API
   ```
2. **Install Dependencies:**
``` bash
   npm install
```
3. **Start the server:**
   ``` bash
      nodemon server(sql).js
   ```
