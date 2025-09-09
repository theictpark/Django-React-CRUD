# Django React CRUD

This project is a full-stack CRUD (Create, Read, Update, Delete) application built with Django (backend) and React (frontend). It demonstrates how to build a RESTful API with Django and connect it to a React frontend for seamless data management.

## Features
- Django REST API for CRUD operations
- SQLite database for development
- Modular Django app structure
- Ready for integration with a React frontend

## Project Structure
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

## Getting Started

### Backend (Django)
1. **Install dependencies**
   ```pwsh
   pip install pipenv
   pipenv install
   pipenv shell
   ```
2. **Apply migrations**
   ```pwsh
   python manage.py migrate
   ```
3. **Run the development server**
   ```pwsh
   python manage.py runserver
   ```

### API Endpoints
- All API endpoints are defined in `api/urls.py` and handled in `api/views.py`.
- Example endpoints:
  - `GET /api/items/` - List all items
  - `POST /api/items/` - Create a new item
  - `PUT /api/items/<id>/` - Update an item
  - `DELETE /api/items/<id>/` - Delete an item

## Testing
Run tests with:
```pwsh
python manage.py test
```

## License
This project is licensed under the MIT License.
