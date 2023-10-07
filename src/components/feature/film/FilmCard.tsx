import { Link } from 'react-router-dom';

import { Film } from '@/config/types/film.type';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

interface FilmCardProps extends Film {
  onClick?: () => void;
}

const FilmCard = ({ id, title, image, description, onClick }: FilmCardProps) => {
  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      className="dark:bg-black hover:-translate-y-1 hover:shadow-lg transition-all duration-500 cursor-pointer"
    >
      <CardMedia sx={{ height: 200 }} image={image} title={title} />
      <CardContent>
        <h5 className="dark:text-white text-base font-semibold text-primary mb-2">{title}</h5>
        <p className="dark:text-white line-clamp-3 text-sm">{description}</p>
      </CardContent>
      <CardActions className="flex justify-end">
        <Link to={`/film/${id}`}>
          <Button>More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default FilmCard;
