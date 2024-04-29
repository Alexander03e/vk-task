import { useQuery } from "react-query";
import { FilmsApi } from "../api/films.api";

const filmsApi = FilmsApi.getInstance();

export interface IGenre {
  id: number;
  name: string;
}

export interface ICurrentFilm {
  id: number;
  genres: Array<IGenre>;
  bugdet: number;
  poster_path: string;
  runtime: number;
  backdrop_path: string;
  overview: string;
  origin_country: Array<string>;
  title: string;
  vote_average: number;
  popularity: number;
  release_date: string;
}

export interface IData {
  results: Array<IFilm>;
  page: number;
  total_pages: number;
}

export interface IFilm {
  release_date: string;
  id: number;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  genre_ids: Array<number>;
  vote_average: number;
  vote_count: number;
}

export const useFilmDetails = (id: number) => {
  return useQuery(["film", id], () => filmsApi.fetchFilmDetails(id), {
    enabled: !!id,
  });
};
