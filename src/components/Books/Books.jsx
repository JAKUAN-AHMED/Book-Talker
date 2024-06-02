import { useEffect, useState } from "react";
import Book from "../Book/Book";
import  '../Book/Book.css';
const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    })
    return (
      <div>
        <h2 className="text-center text-5xl text-[#1A1919] font-extrabold mb-8 mt-8 Playfair">
          Books
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 Playfair">
            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
        </div>
      </div>
    );
};

export default Books;