import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {getStoredDataForR, getStoredDataForW} from "../Utility/Localstorage";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline, IoDocumentOutline } from "react-icons/io5";
const ListedBooks = () => {
    const books=useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find((book) => book.id === idInt);
    const [display,setDisplay]=useState([]);
    const [displayW,setDisplayW]=useState([]);
    const [clicked,setClicked]=useState([]);
    const [clickedW,setClickedW]=useState([]);
    const handlefilter = (filter) => {
      if (filter === "rating") {

        const sortedClicked = [...clicked].sort((a, b) => a.rating - b.rating);
        const sortedClickedW = [...clickedW].sort(
          (a, b) => a.rating - b.rating
        );
        setDisplay(sortedClicked);
        setDisplayW(sortedClickedW);
      } else if (filter === "number of pages") {
        const sortedClicked = [...clicked].sort(
          (a, b) => a.totalPages - b.totalPages
        );
        const sortedClickedW = [...clickedW].sort(
          (a, b) => a.totalPages - b.totalPages
        );
        setDisplay(sortedClicked);
        setDisplayW(sortedClickedW);
      } else if (filter === "publisher year") {
        const sortedClicked = [...clicked].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing
        );
        const sortedClickedW = [...clickedW].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing
        );
        setDisplay(sortedClicked);
        setDisplayW(sortedClickedW);
      }
    };
    useEffect(()=>{
      const storedBookId=getStoredDataForR();
      const storedBookId2=getStoredDataForW();
      if(books.length>0)
        {
          const readBook=books.filter(book=>storedBookId.includes(book.id));
          // setRead(readBook);
          setDisplay(readBook);
          setClicked(readBook);
          const readBook2 = books.filter((book) =>
            storedBookId2.includes(book.id)
          );
          setDisplayW(readBook2);
          setClickedW(readBook2);
        }
    },[books])
    
    return (
      <div className="overflow-x-hidden">
        <h2 className="text-3xl font-bold work_sens border-black rounded-lg p-4 mt-4 mb-4 text-center bg-[#1313130D]">
          Books
        </h2>
        {/* drop down menu */}
        <div className="text-base font-medium work_sens mt-4 mb-14 p-2 text-center">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-red-400 text-black"
            >
              <select name="" id="" className="bg-red-400 text-white">
                <option value="">Sort by</option>
              </select>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 m-2"
            >
              {/* <li><a href="">Filter</a></li> */}
              <li onClick={() => handlefilter("rating")}>
                <a>rating</a>
              </li>
              <li onClick={() => handlefilter("number of pages")}>
                <a>number of pages</a>
              </li>
              <li onClick={() => handlefilter("publisher year")}>
                <a>publisher year</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Tab */}
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-xl text-red-400 work_sens"
            aria-label="Read Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {display.map((book) => (
              <div
                key={book.id}
                className="grid grid-cols-1 mb-4 max-w-4xl mx-auto"
              >
                <div className="card card-side bg-base-100  rounded-lg shadow-xl grid lg:grid-cols-4 gap-2 p-4">
                  <div className="col-span-1 bg-purple-100 w-70 h-70 border rounded shadow-xl m-4 Playfair ">
                    <figure>
                      <img src={book.image} alt="book" />
                    </figure>
                  </div>
                  <div className="col-span-3">
                    <div className="mb-6">
                      <h2 className="text-2xl card-title font-bold Playfair">
                        {book.bookName}
                      </h2>
                      <h2 className="text-base font-medium work_sens">
                        By : {book.authorName}
                      </h2>
                    </div>
                    <div className="flex gap-6">
                      <h2 className="text-[#131313] text-base font-bold wokr_sens">
                        Tags
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                        <p className="text-[#23BE0A]  bg-[#23BE0A0D] border rounded-full w-24">
                          #{book.tags[0]}
                        </p>
                        <p className="text-[#23BE0A] bg-[#23BE0A0D] border rounded-full w-28">
                          #{book.tags[1]}
                        </p>
                        <p className="flex items-center">
                          <CiLocationOn></CiLocationOn>
                          <span>
                            Year of Publishing :{book.yearOfPublishing}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="lg:flex items-center mt-4 mb-4 p-4 gap-4 text-base font-normal work_sens ">
                      <h2 className="flex items-center gap-2 text-[#13131399] text-base font-normal ">
                        <span>
                          <IoPeopleOutline></IoPeopleOutline>
                        </span>
                        Publisher :{book.publisher}
                      </h2>
                      <h2 className="flex items-center gap-1 text-[#13131399]">
                        <span>
                          <IoDocumentOutline></IoDocumentOutline>
                        </span>
                        page : {book.totalPages}
                      </h2>
                    </div>
                    <div className="p-4">
                      <p className="border-t border-dashed  border-[#13131326]"></p>
                    </div>
                    <div className="lg:flex justify-around items-center ">
                      <h2 className="text-[#328EFF] bg-[#328EFF26] border rounded-full w-[170px] text-base font-medium work_sens mb-2">
                        category : {book.category}
                      </h2>
                      <h2 className="text-[#FFAC33] bg-[#FFAC3326] border rounded-full w-[170px] text-base font-medium work_sens mb-2">
                        Rating : {book.rating}
                      </h2>
                      <Link to={`/book/${book.id}`}>
                        <button className=" btn text-white bg-[#23BE0A] border rounded-full w-[170px] text-base font-medium work_sens">
                          View details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-xl text-red-400 work_sens"
            aria-label="Wishlist Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {displayW.map((book) => (
              <div
                key={book.id}
                className="grid grid-cols-1 mb-4 max-w-4xl mx-auto"
              >
                <div className="card card-side bg-base-100  rounded-lg shadow-xl grid lg:grid-cols-4 gap-2 p-4">
                  <div className="col-span-1 bg-purple-100 w-70 h-70 border rounded shadow-xl m-4 Playfair ">
                    <figure>
                      <img src={book.image} alt="book" />
                    </figure>
                  </div>
                  <div className="col-span-3">
                    <div className="mb-6">
                      <h2 className="text-2xl card-title font-bold Playfair">
                        {book.bookName}
                      </h2>
                      <h2 className="text-base font-medium work_sens">
                        By : {book.authorName}
                      </h2>
                    </div>
                    <div className="flex gap-6">
                      <h2 className="text-[#131313] text-base font-bold wokr_sens">
                        Tags
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                        <p className="text-[#23BE0A]  bg-[#23BE0A0D] border rounded-full w-24">
                          #{book.tags[0]}
                        </p>
                        <p className="text-[#23BE0A] bg-[#23BE0A0D] border rounded-full w-28">
                          #{book.tags[1]}
                        </p>
                        <p className="flex items-center">
                          <CiLocationOn></CiLocationOn>
                          <span>
                            Year of Publishing :{book.yearOfPublishing}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="lg:flex items-center mt-4 mb-4 p-4 gap-4 text-base font-normal work_sens ">
                      <h2 className="flex items-center gap-2 text-[#13131399] text-base font-normal ">
                        <span>
                          <IoPeopleOutline></IoPeopleOutline>
                        </span>
                        Publisher :{book.publisher}
                      </h2>
                      <h2 className="flex items-center gap-1 text-[#13131399]">
                        <span>
                          <IoDocumentOutline></IoDocumentOutline>
                        </span>
                        page : {book.totalPages}
                      </h2>
                    </div>
                    <div className="p-4">
                      <p className="border-t border-dashed  border-[#13131326]"></p>
                    </div>
                    <div className="lg:flex justify-around items-center ">
                      <h2 className="text-[#328EFF] bg-[#328EFF26] border rounded-full w-[170px] text-base font-medium work_sens mb-2">
                        category : {book.category}
                      </h2>
                      <h2 className="text-[#FFAC33] bg-[#FFAC3326] border rounded-full w-[170px] text-base font-medium work_sens mb-2">
                        Rating : {book.rating}
                      </h2>
                      <Link to={`/book/${book.id}`}>
                        <button className=" btn text-white bg-[#23BE0A] border rounded-full w-[170px] text-base font-medium work_sens">
                          View details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ListedBooks;