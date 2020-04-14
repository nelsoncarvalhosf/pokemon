import {
  SET_FAV,
} from "../actions/addPeoples";

const initialState = {
  favPeoples : [{}]
};

export const peoples = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV:
      return {
        ...state,
        favPeoples: state.favPeoples.concat(action.payload)
      };
    default:
      return state;
  }
};
