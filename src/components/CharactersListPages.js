import React, { useState, useEffect } from "react";
import { SWService } from "../services/SWService";
import { CharactersLists } from "./shared/CharactersLists";


export const CharactersListPages = (props) => {
  const [characters, setCharacters] = useState({ data: { results: [] } });
  const requestCharacters = async () => {
    const charactersResult = await SWService.getCharactersPages(props.match.params.page);
    setCharacters(charactersResult);
  };

  useEffect(() => {
    requestCharacters();
  }, []);

  return <CharactersLists characters={characters} />
};