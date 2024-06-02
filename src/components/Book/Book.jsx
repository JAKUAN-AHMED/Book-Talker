import { CiStar } from "react-icons/ci";
import './Book.css'
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookName, authorName, image, rating, category, tags,id } = book;
  return (
    <Link to={`/book/${id}`}>
      <div className="card card-compact bg-base-100 shadow-lg">
        <div className="bg-purple-100 w-70 h-70 border rounded shadow-lg m-4 Playfair">
          <figure className="p-6">
            <img src={image} alt="card_img" />
          </figure>
        </div>
        <p className="Playfair flex gap-4 p-2">
          <p className=" text-[#23BE0A] bg-[#23BE0A0D] border rounded-full w-24">
            {tags[0]}
          </p>
          <p className="text-[#23BE0A] bg-[#23BE0A0D] border rounded-full w-28">
            {tags[1]}
          </p>
        </p>
        <div className="card-body Playfair font-bold text-base">
          <h2 className="card-title text-2xl">{bookName}</h2>
        </div>
        <h2 className="p-4 text-base font-medium work_sens">
          By : {authorName}
        </h2>
        <div className="p-4">
          <p className="border-t border-dashed  border-[#13131326]"></p>
        </div>
        <div className="flex justify-between p-4 font-sm text-base work_sens">
          <p>{category}</p>
          <p className="flex gap-1 items-center">
            {rating}
            <CiStar></CiStar>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
