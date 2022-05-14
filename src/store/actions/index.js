import axios from 'axios';
import {
  CHANGE_JOKELIST, TOGGLE_JOKE_TO_FAVOURITES,
} from '../../constants';

export const fetchJokeList = () => async (dispatch) => {
  let response;

  if (!response) dispatch({ type: CHANGE_JOKELIST, payload: [] });
  response = await axios.get('https://karljoke.herokuapp.com/jokes/programming/10');

  dispatch({ type: CHANGE_JOKELIST, payload: response.data });
};

export const toggleJokeToFavourites = (jokeId, joke) => ({
  type: TOGGLE_JOKE_TO_FAVOURITES,
  jokeId,
  joke,
});
