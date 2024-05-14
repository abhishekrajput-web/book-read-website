import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../components';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://softwium.com/api/books');
      setLoading(false);
      setBooks(response.data);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching book details:', error);
      setError('An error occurred while fetching book details. please check your internet connection or try again.');
    }
  };


  useEffect(() => {
    fetchBooks();
  }, []);


  if(loading){
    return (
      <Loader/>
    )
  }

  
  if (error) {
    return (
      <div className="container mx-auto px-6 flex flex-col justify-center items-center h-screen">
        <p className="text-red-600 text-xl sm:text-2xl md:text-4xl text-center">{error}</p>
      </div>
    );
  }


  return (
    <main className='py-20'>
      <div className="container mx-auto px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Book Collections</h1>
      <ul className="space-y-2">
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} className="text-blue-500 hover:underline">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
      </div>

    </main>
  );
};

export default Home;

