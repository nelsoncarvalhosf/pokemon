import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { Pagination } from "../Pagination";
import icon from '../../img/movie.png';


export const FilmsLists = ({films}) => {
    const dispatch = useDispatch();
    return (
      <>
        <ul className="listFilms">
          {films.data.results.map(film => (
            
            <li className="results__item">
              <h3 className="results__title">
                {film.title}
                <span> (Episode {film.episode_id})</span>
              </h3>
              
              <ul className="results__info">
                <li>Released <span>{film.release_date}</span> </li>
                <li>Directed by <span>{film.director}</span> </li>
                <li>Produced by <span>{film.producer}</span> </li>
              </ul>
              <img src={icon} className="results__icon"/>
            </li>
          ))}
        </ul>
      </> 
      );
}
