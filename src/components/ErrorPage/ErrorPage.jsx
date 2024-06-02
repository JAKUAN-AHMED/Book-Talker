import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
      <div className="manrope bg-slate-300 min-w-5xl text-center min-h-96 justify-center items-center flex-col gap-8">
        <h2 className="text-2xl font-bold p-8">oh shit!!!!</h2>
        <Link to={'/'}>
          <button className="btn bg-slate-400">Go back</button>
        </Link>
      </div>
    );
};

export default ErrorPage;