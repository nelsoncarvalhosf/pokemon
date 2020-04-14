import React, { useState, useEffect } from "react";
import { SWService } from "../services/SWService";
import {CharacterImg} from "./shared/CharacterImg";


export const Character = (props) => {
  const [character, setCharacters] = useState({ data: { results: [] } });

  const requestCharacters = async () => {
    const charactersResult = await SWService.getCharacter(props.match.params.id);
    setCharacters(charactersResult);
  };

  useEffect(() => {
    requestCharacters();
  }, []);
  
  return (
    <div>
      
        <h1>{character.data.name}</h1>
        <br/>
        {/* <img src={character.data.front_default} className="App-logo" alt="logo" width="200px" /> */}
        <br/>
        <CharacterImg character={character.data} />
    </div>
  );
};