import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import filmApi from '@/config/api/filmApi';
import { Film } from '@/config/types/film.type';
import NotFound from '@/pages/exception/NotFound';
import { CircularProgress } from '@mui/material';

const FilmDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: film,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['films', id],
    queryFn: async () => {
      if (!id) {
        return undefined;
      }
      const res = await filmApi.getFilm(id);
      return res as unknown as Film;
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center w-full">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <div className="w-full py-4">
      {film && (
        <>
          <div className="w-full h-[50vh] aspect-video rounded-xl overflow-hidden relative">
            <img src={film.image} alt={film.title} className="w-full h-full object-cover object-center" />

            <div className="absolute top-0 l-0 r-0 w-full h-full bg-black z-10 bg-opacity-70"></div>

            <div className="absolute top-0 l-0 r-0 w-full h-full z-20 flex items-end justify-left">
              <h1 className="text-white text-8xl font-bold opacity-80 whitespace-nowrap">{film.title}</h1>
            </div>
          </div>
          <div className="flex flex-col py-4 gap-2">
            <div className="dark:text-white">
              <h4 className="font-semibold text-lg mb-1">Description:</h4>
              <p className="text-base font-light opacity-80">{film.description}</p>
            </div>
            <div className="dark:text-white">
              <h4 className="font-semibold text-lg mb-1">Year:</h4>
              <p className="text-base font-light opacity-80">{film.year}</p>
            </div>
            <div className="dark:text-white">
              <h4 className="font-semibold text-lg mb-1">Nation:</h4>
              <p className="text-base font-light opacity-80">{film.nation}</p>
            </div>
            <div className="dark:text-white">
              <h4 className="font-semibold text-lg mb-1">Trailer:</h4>
              <div className="w-full aspect-video my-4">
                <iframe
                  className="w-full h-full"
                  src={film.youtubeUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilmDetailPage;
