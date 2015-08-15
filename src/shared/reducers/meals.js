import { SUCCESS_LOADING_MEALS } from '../constants/constants';

const initialState = {};

export default function meals(state = initialState, action) {

  switch(action.type) {

    case SUCCESS_LOADING_MEALS:
      return action.payload.entities.meals;

    default:
      return state;
  }
}
