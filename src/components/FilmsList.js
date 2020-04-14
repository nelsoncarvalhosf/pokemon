import React, { useState, useEffect } from "react";
import { SWService } from "../services/SWService";
import { FilmsLists } from "./shared/FilmsLists";


export const FilmsList = (props) => {
  const [films, setFilms] = useState({ data: { results: [] } });
  const requestFilms = async () => {
    const filmsResult = await SWService.getFilms();
    setFilms(filmsResult);
  };

  useEffect(() => {
    requestFilms();
  }, []);

  return <FilmsLists films={films} />
};