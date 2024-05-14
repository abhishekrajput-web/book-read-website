import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, BookDetail, Error } from "./pages";
import { Header, Footer } from "./components";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<Home />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;