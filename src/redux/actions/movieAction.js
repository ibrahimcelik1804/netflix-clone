import axios from "axios";
import { options } from "../../constant";
import { ActionTypes } from "./../actionTypes";

// bütün isteklerin baseUrl'ini tanımlama
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// popüler filmleri getir ve store aktar
export const getPopular = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_MOVIES_LOADİNG });
  axios
    .get("/movie/popular?language=tr", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => {
      dispatch({ type: ActionTypes.SET_MOVIES_ERROR, payload: err.message });
    });
};

// kategorileri al ve store aktar
export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_GENRES_LOADİNG });
  axios
    .get("/genre/movie/list?language=tr", options)
    .then((res) => {
      dispatch({ type: ActionTypes.SET_GENRES, payload: res.data.genres });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.SET_GENRES_ERROR, payload: err.message });
    });
};
