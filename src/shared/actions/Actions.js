import {
  BEGIN_LOADING_MEALS,
  SUCCESS_LOADING_MEALS,
  ERROR_LOADING_MEALS
} from '../constants/constants';

import { loadMeals } from '../webUtils/webUtils';

export function beginLoadingMeals() {
  return {
    promise: loadMeals(),
    types: [BEGIN_LOADING_MEALS, SUCCESS_LOADING_MEALS, ERROR_LOADING_MEALS]
  }
}

export function successLoadingMeals(payload) {
  return {
    type: SUCCESS_LOADING_MEALS,
    payload: payload
  }
}

export function errorLoadingMeals(payload) {
  return {
    type: ERROR_LOADING_MEALS,
    payload: payload
  }
}
