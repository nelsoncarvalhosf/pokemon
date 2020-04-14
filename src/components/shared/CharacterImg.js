import React from "react";
import { useDispatch} from "react-redux";

export const CharacterImg = ({character}) => {
    const dispatch = useDispatch();
    let x = '';
    if(character.sprites != undefined){
      x = Object.keys(character.sprites);
      
    }
        
    if(x != ''){
      return (
        <>
          <img src={character.sprites.front_default} alt="img" width="150px" />
        </> 
      );
    } else {
      return (
        <>
        </> 
      );
    }
      
}
