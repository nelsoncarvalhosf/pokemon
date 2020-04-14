import React, { useState, useEffect } from "react";
import { SWService } from "../services/SWService";
import { CharactersLists } from "./shared/CharactersLists";


export const CharactersList = (props) => {
  const [characters, setCharacters] = useState({ data: { results: [] } });
  const requestCharacters = async () => {
    const charactersResult = await SWService.getCharacters(props.match.params.page);
    setCharacters(charactersResult);
  };

  useEffect(() => {
    requestCharacters();
  }, []);

  return <CharactersLists characters={characters} />
};