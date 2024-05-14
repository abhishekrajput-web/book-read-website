import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BookComponent, Loader } from '../components';

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const fetchBookDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://softwium.com/api/books/${bookId}`);
      setLoading(false);
      setBook(response.data);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching book details:', error);
      setError('An error occurred while fetching book details. please check your internet connection or try again');
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);


  if (loading) {
    return <Loader/>;
  }


  if (error) {
    return (
      <div className="container mx-auto px-6 flex flex-col justify-center items-center h-screen">
        <p className="text-red-600 text-xl sm:text-2xl md:text-4xl text-center">{error}</p>
        <Link to="/books" className="bg-blue-500 text-white text-xl w-full max-w-[120px] my-8 md:text-xl text-center rounded-sm px-4 py-2 hover:bg-blue-600 transition-all duration-75">Go Back</Link>
      </div>
    );
  }

  return (
    <section className='pt-20'>
      <div className="container mx-auto px-6 flex flex-col gap-5">
      <BookComponent book={book}/>
      <Link to="/books" className="bg-blue-500 text-white text-xl w-full max-w-[120px] my-8 md:text-xl text-center rounded-sm px-4 py-2 hover:bg-blue-600 transition-all duration-75">Go Back</Link>
      </div>
    </section>
  )
};

export default BookDetail;

