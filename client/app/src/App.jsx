import { use, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState('');
  const [year, setYear] = useState(Date); 
  const [updateName, setUpdateName] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (e) => {
    e.preventDefault();
    const newBook = { name, year };
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      if (response.ok) {
        fetchBooks();
      } else {
        console.error('Error adding book:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const updateBook = async (pk, year) => {
    const updatedBook = { name: updateName, year };
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });
      
      if (response.ok) {
        fetchBooks();
      } else {
        console.error('Error updating book:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchBooks();
      } else {
        console.error('Error deleting book:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input 
          type="text" 
          placeholder="Book Title..." 
          onChange={(e) => setName(e.target.value)}/>
        <input 
          type="date" 
          placeholder="Publication Date..." 
          onChange={(e) => setYear(e.target.value)}/>
        {/* button color primary in tailwindcss */}
        <button onClick={addBook} className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
      </div>
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h2>Title: {book.name}</h2>
            <p>Publication Date: {book.year}</p>
            <input 
              type="text" 
              placeholder="Update Name..." 
              onChange={(e) => setUpdateName(e.target.value)}
            />
            <button onClick={() => updateBook(book.id, book.year)}>Update Name</button>
            <button onClick={() => deleteBook(book.id)}>Delete Book</button>
          </div>
        ))}
    </>
  )
}

export default App
