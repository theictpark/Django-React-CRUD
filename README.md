# Django React CRUD

This project is a **full-stack CRUD (Create, Read, Update, Delete) application** built with **Django** for the backend and **React (with Vite)** for the frontend. It demonstrates how to build a RESTful API with Django and connect it to a modern React frontend for seamless data management.

## Features
- RESTful API backend powered by Django  
- Modern React frontend built with Vite  
- SQLite database for development (easy setup)  
- CRUD operations for managing data  
- Responsive UI  
- Modular Django app structure  

---

## Project Structure

### Backend (Django)
```
server/
├── api/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializer.py
│   ├── tests.py
│   ├── urls.py
│   ├── views.py
│   └── migrations/
├── project/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── db.sqlite3
├── manage.py
├── Pipfile
└── Pipfile.lock
```

### Frontend (React + Vite)
```
app/
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── assets/
        └── react.svg
```

---

## Getting Started

### Prerequisites
- **Python & Django**
- **Node.js & npm**

---

### Backend Setup (Django)
1. Install dependencies:
   ```pwsh
   pip install pipenv
   pipenv install
   pipenv shell
   ```
2. Apply migrations:
   ```pwsh
   python manage.py migrate
   ```
3. Run the development server:
   ```pwsh
   python manage.py runserver
   ```

#### API Endpoints
All API endpoints are defined in `api/urls.py` and handled in `api/views.py`.

Examples:
- `GET /api/items/` — List all items  
- `POST /api/items/` — Create a new item  
- `PUT /api/items/<id>/` — Update an item  
- `DELETE /api/items/<id>/` — Delete an item  

---

### Frontend Setup (React + Vite)
1. Navigate to the `app` directory:
   ```pwsh
   cd app
   ```
2. Install dependencies:
   ```pwsh
   npm install
   ```
3. Start the development server:
   ```pwsh
   npm run dev
   ```

#### Scripts
- `npm run dev` — Start Vite development server  
- `npm run build` — Build for production  
- `npm run lint` — Run ESLint  

---

### Connecting Frontend & Backend
- Update API endpoints in your React code to match your Django backend URLs (e.g., `http://localhost:8000/api/items/`).  

---

## Testing
Run Django tests with:
```pwsh
python manage.py test
```

---

## License
This project is licensed under the **MIT License**.

## Author
the ict park  
