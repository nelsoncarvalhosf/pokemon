import React from "react";
import { Link } from "react-router-dom";

let i = 1;

export const Pagination = ({characters}) => {
    let qtd = characters.data.count;
    let qtdPage = Math.round(qtd/20);
    var rows = [];
    let j=0;
    for(i=1;i<=qtdPage;i++){
     rows.push(<li><a href={`/pokemons/page/${j}`}> Page {i}</a></li>)
     j=j+20;
    }
    return (
      <>
        <ul className="pages">
          {rows}
        </ul>
      </>      
    );
}
