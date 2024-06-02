import Bannersection from "../Bannersection/Bannersection";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Bannersection></Bannersection>
            <Books></Books>
        </div>
    );
};

export default Home;