import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { Pagination } from "../Pagination";
import icon from '../../img/pokebola.png';


export const CharactersLists = ({characters}) => {
    const dispatch = useDispatch();
    return (
      <>
        <ul className="listCharacters">
          {characters.data.results.map(character => (
            
            <li className="results__item">
              <h3 className="results__title">{character.name}</h3>
              
              <ul className="results__info">
              
              </ul>
              <Link to={`/pokemon/${character.url.split('/')[6]}`}><img src={icon} className="results__icon"/></Link>
            </li>
          ))}
        </ul>
        
        <Pagination  characters={characters} />
      </> 
      );
}
