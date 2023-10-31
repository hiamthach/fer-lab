import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import FilmForm from '@/components/feature/film/FilmForm';
import filmApi from '@/config/api/filmApi';
import { Film } from '@/config/types/film.type';
import { withAuth } from '@/hocs/withAuth';
import usePageTitle from '@/hooks/usePageTitle';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Button,
  CircularProgress,
  Fade,
  IconButton,
  Modal,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

interface Column {
  id: 'id' | 'title' | 'description' | 'year' | 'nation' | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'title', label: 'Title', minWidth: 200 },
  { id: 'description', label: 'Description', minWidth: 100 },
  { id: 'year', label: 'Year', minWidth: 100 },
  { id: 'nation', label: 'Nation', minWidth: 150 },
  { id: 'actions', label: 'Actions', minWidth: 100, align: 'right' },
];

const FilmEditPage = withAuth(() => {
  usePageTitle('Edit Films');

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const res = await filmApi.getFilms();
      return res as unknown as Film[];
    },
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isLoading && (
        <div className="flex min-h-[80vh] items-center justify-center w-full">
          <CircularProgress />
        </div>
      )}
      {data && (
        <>
          <div className="text-right my-4">
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              New Film
            </Button>
          </div>
          <TableContainer>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className="dark:text-white"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.id === 'actions') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div className="flex justify-end">
                              <Link to={`/film/${row.id}`}>
                                <IconButton size="small">
                                  <VisibilityIcon className="text-yellow-400 text-sm" />
                                </IconButton>
                              </Link>
                              <IconButton size="small">
                                <EditIcon className="text-cyan-400 text-sm" />
                              </IconButton>
                              <IconButton size="small">
                                <DeleteIcon className="text-primary text-sm" />
                              </IconButton>
                            </div>
                          </TableCell>
                        );
                      }
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <p className="line-clamp-2 dark:text-white">
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </p>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data?.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
      <Modal open={isModalOpen} onClose={handleClose} aria-labelledby="Film Modal" closeAfterTransition>
        <Fade in={isModalOpen}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black drop-shadow-lg rounded-2xl p-4">
            <div className="flex justify-between items-center ">
              <h3 className="text-xl font-semibold text-primary">New Film</h3>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon className="dark:text-white" />
              </IconButton>
            </div>

            <div className="w-[560px] mt-2">
              <FilmForm />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

export default FilmEditPage;
