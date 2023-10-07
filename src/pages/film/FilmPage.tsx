import { useState } from 'react';
import { Link } from 'react-router-dom';

import FilmCard from '@/components/feature/film/FilmCard';
import { Film } from '@/config/types/film.type';
import { filmData } from '@/data/filmData';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Fade, IconButton, Modal } from '@mui/material';

const FilmPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFilm, setSelectedFilm] = useState<Film>({} as Film);

  const handleCardClick = (film: Film) => {
    setSelectedFilm(film);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="w-full grid grid-cols-3 py-4 gap-8">
        {filmData.map((film) => {
          return (
            <FilmCard
              key={film.id}
              {...film}
              onClick={() => {
                handleCardClick(film);
              }}
            />
          );
        })}
      </div>
      {selectedFilm && (
        <Modal open={open} onClose={handleClose} aria-labelledby="Film Modal" closeAfterTransition>
          <Fade in={open}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black drop-shadow-lg rounded-2xl p-4">
              <div className="flex justify-end items-center ">
                <IconButton aria-label="close" onClick={handleClose}>
                  <CloseIcon className="dark:text-white" />
                </IconButton>
              </div>

              {/* youtube */}
              <div className="w-full aspect-video my-4">
                <iframe
                  className="w-full h-full"
                  src={selectedFilm.youtubeUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>

              <p className="text-sm dark:text-white">{selectedFilm.description}</p>
              <div className="flex justify-end ">
                <Link to={`/film/${selectedFilm.id}`}>
                  <Button>More</Button>
                </Link>
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
};

export default FilmPage;
