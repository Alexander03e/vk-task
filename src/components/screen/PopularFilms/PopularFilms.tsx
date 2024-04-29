import { FilmsList } from "../../ui/FilmsList/FilmsList";
import styles from "./PopularFilms.module.scss";
import { useNavigate } from "react-router-dom";
import { FilmsBlock } from "../../ui/FilmsBlock/FilmsBlock";
import { MoreFilmsButton } from "../../ui/MoreFilmsButton/MoreFilmsButton";
import { FilmsGrid } from "../../ui/FilmsGrid/FilmsGrid";
import { Pagination } from "../../ui/Pagination/Pagination";
import { useState } from "react";
import { useFilmsByPagination } from "../../../hooks/useFilmsByPagination";

export const PopularFilms = ({ display }: { display: "grid" | "flex" }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useFilmsByPagination(page);
  const handlePageChange = (num: number) => {
    setPage(num);
  };

  const navigate = useNavigate();
  const navigateFilm = (id: number) => {
    navigate(`/films/${id}`);
  };
  const clickOnTitle = () => {
    navigate("/films");
  };
  if (isError) {
    return <p>Не удалось загрузить информацию</p>;
  }
  switch (display) {
    case "flex":
      return (
        <FilmsBlock clickOnTitle={clickOnTitle} title="Популярные фильмы">
          <div className={styles.filmsWrapper}>
            <FilmsList
              isLoading={isLoading}
              films={data?.results}
              navigateFilm={navigateFilm}
            />
            <MoreFilmsButton url="/films" />
          </div>
        </FilmsBlock>
      );
    case "grid":
      return (
        <>
          <h2 style={{ marginBottom: "20px" }}>Популярные фильмы</h2>
          <Pagination
            page={page}
            totalPages={Number(data?.total_pages)}
            onPageChange={handlePageChange}
          />
          <FilmsGrid
            isLoading={isLoading}
            films={data?.results}
            navigateFilm={navigateFilm}
          />
        </>
      );
  }
};
