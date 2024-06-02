import { useEffect, useState } from "react";
import { getStoredDataForR } from "../Utility/Localstorage";
import { useLoaderData } from "react-router-dom";
import CustomChart from "../CustomChart/CustomChart";

const ReadablePage = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredDataForR();
    const readBookList = books.filter((book) =>
      storedBookIds.includes(book.id)
    );
    setReadBooks(readBookList);
  }, [books]);

  return (
    <div>
      <h2 className="text-3xl font-bold work_sens border-black rounded-lg p-4 mt-4 mb-4 text-center bg-[#1313130D]">
        Pages to Read
      </h2>
      <div className="max-w-4xl mx-auto">
        <CustomChart books={readBooks}></CustomChart>
      </div>
    </div>
  );
};

export default ReadablePage;
