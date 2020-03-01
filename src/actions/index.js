import {
  ADD_MOVIE,
  SEARCH_MOVIE,
  DELETE_MOVIE,
  SEARCH_BYRATE,
  EDIT_MOVIE,
  GET_MOVIE
} from "../constants/action-types";

export function addMOVIE(movie) {
  return { type: ADD_MOVIE, movie };
}
export function searchMOVIE(search) {
  return { type: SEARCH_MOVIE, payload: search };
}
export const searchByRate = rank => {
  return { type: SEARCH_BYRATE, payload: rank };
};
export const editMOVIE = payload => {
  return { type: EDIT_MOVIE, payload };
};
export function deleteMOVIE(id) {
  return { type: DELETE_MOVIE, id };
}
export function getMOVIE(title) {
  return { type: GET_MOVIE, title };
}
