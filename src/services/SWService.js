import axios from "axios";

export class SWService {
 
  static _withBaseUrl(path) {
    return `https://pokeapi.co/api/v2/${path}`;
  }

  static getCharacters() {
    return axios(SWService._withBaseUrl("pokemon/"));
  }
  static getCharactersPages(page) {
    return axios(SWService._withBaseUrl("pokemon?offset="+page+"&limit=20"));
  }
  static getCharacter(id) {
    return axios(SWService._withBaseUrl("pokemon-form/" + id));
  }
}
