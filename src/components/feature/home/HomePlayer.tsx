import { Link } from 'react-router-dom';

export interface Player {
  id: string;
  name: string;
  club: string;
  img: string;
}

const HomePlayer = ({ id, name, club, img }: Player) => {
  return (
    <div className="text-center bg-gray-200">
      <img src={img} alt={`${id}-img`} className="w-full aspect-video object-cover object-center" />
      <h4 className="font-bold mt-2 text-lg">{name}</h4>
      <h5 className="text-gray-500 mb-2">{club}</h5>
      <Link to={`players/${id}`} className="block w-full p-1 text-white bg-black">
        Details
      </Link>
    </div>
  );
};

export default HomePlayer;
