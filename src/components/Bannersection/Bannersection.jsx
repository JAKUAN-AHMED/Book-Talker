import { Link } from 'react-router-dom';
import BannerImg from '../../assets/bannerimg.png';
import './Bannersection.css'
const Bannersection = () => {
    return (
      <div className="max-w-5xl mx-auto mb-24">
        <div className="hero min-h-screen bg-[#1313130D] border rounded Playfair">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={BannerImg} className="rounded-lg" />
            <div>
              <h1 className="text-5xl font-extrabold mb-12">
                <p className="pb-6">Books to freshen up</p>
                <p>your bookshelf</p>
              </h1>

              <Link to={'/listedbook'}>
                <button className="btn bg-[#23BE0A] text-white">
                  View The List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Bannersection;