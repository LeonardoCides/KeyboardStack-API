# ⌨️ KeyboardStack API + Data Intelligence

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

An efficient REST API designed to manage mechanical keyboard inventory with integrated Python data intelligence for automatic report generation.

<div align="center">
  <img src="terminal.png" alt="Terminal Preview" width="600px">
</div>

## 🚀 Features

- **Interactive Dashboard:** Modern web interface to manage stock visually.
- **Inventory Management:** Full CRUD for keyboard stocks.
- **Data Intelligence:** Python script for stock analysis.
- **PDF Reporting:** Automatic PDF reports for low-stock items.
- **Auto-Setup:** Automatic MySQL table initialization on startup.

## 🛠️ Technologies

- **Frontend:** HTML5, CSS3, and JavaScript (Vanilla).
- **Backend:** Node.js & Express.js.
- **Data Intelligence:** Python 3 (FPDF & mysql-connector).
- **Database:** MySQL.
  
## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/estoque` | Returns all items from the database |
| `POST` | `/estoque` | Adds a new product |
| `PATCH` | `/estoque/vender/:id` | Decreases quantity by 1 |
| `DELETE` | `/estoque/:id` | Removes a product |
| `GET` | `/analise/gerar-pdf` | **[NEW]** Triggers Python script to generate/view PDF report |

## 🏁 How to Run
1. **Clone the repository:**
   ```bash
   git clone https://github.com/LeonardoCides/KeyboardStack-API
   ```
2. **Install Dependencies:**
``` bash
   npm install
```
4. **Install Python Dependencies::**
   ``` bash
     source venv/bin/activate  # Linux/Mac
    .\venv\Scripts\activate   # Windows
     pip install -r requirements.txt
   ```
5. **Setup Environment Variables:**
   Create a .env file in the root directory:
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=your_password
   DB_NAME=sistema_estoque
   PORT=3000
   ```
6. **Start the server**:
   ```bash
     npm start
   ```
