import axios from 'axios';
import {
  UPDATE_JOKELIST, DELETE_JOKE, ADD_JOKE_TO_FAVOURITES
} from "../../constants";

export const fetchJokeList = (currentPage) => async dispatch => {
  const response = await axios.get(`https://karljoke.herokuapp.com/jokes/programming/10?_page=${currentPage}`);
  dispatch({ type: UPDATE_JOKELIST, payload: response.data })
}

// export const updateJokeList = (joke) => ({
//   type: UPDATE_JOKELIST,
//   joke
// });

export const deleteJoke = (jokeId) => ({
  type: DELETE_JOKE,
  jokeId
});

export const addJokeToFavourites = (joke) => ({
  type: ADD_JOKE_TO_FAVOURITES,
  joke
});