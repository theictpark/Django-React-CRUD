
# DjangoReactCRUD

This project is a full-stack CRUD (Create, Read, Update, Delete) application using Django for the backend and React (with Vite) for the frontend.

## Features
- Modern React frontend built with Vite
- RESTful API backend powered by Django
- CRUD operations for managing data
- Responsive UI

## Project Structure
```
app/
  eslint.config.js
  index.html
  package.json
  README.md
  vite.config.js
  public/
	 vite.svg
  src/
	 App.css
	 App.jsx
	 index.css
	 main.jsx
	 assets/
		react.svg
```

## Getting Started

### Prerequisites
- Node.js & npm
- Python & Django

### Frontend Setup
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

### Backend Setup
1. Set up your Django backend in a separate directory (not included here).
2. Run Django migrations and start the server:
	```pwsh
	python manage.py migrate
	python manage.py runserver
	```

### Connecting Frontend & Backend
- Update API endpoints in your React code to match your Django backend URLs.

## Scripts
- `npm run dev` — Start Vite development server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint

## License
MIT

## Author
Your Name
