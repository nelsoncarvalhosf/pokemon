import React from "react";
import {useSelector} from "react-redux";

export const Favoritos = () => {
    const peoples = useSelector(state => state.peoples.favPeoples);
    return (
    <div>
     
     {peoples.map(people => (
        <li>{people.title}</li>
      ))}
    
        <br/>

    </div>
  );
}