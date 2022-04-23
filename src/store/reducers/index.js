import {
  UPDATE_JOKELIST, DELETE_JOKE, ADD_JOKE_TO_FAVOURITES
} from "../../constants";

const initialState = {
  jokeList: [],
  favouriteJokes: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_JOKELIST:
      return {
        ...state,
        jokeList: action.payload
      }
    case DELETE_JOKE:
      return {
        ...state,
        jokeList: state.jokeList.filter(joke => joke.id !== action.jokeId),
        favouriteJokes: state.favouriteJokes.filter(joke => joke.id !== action.jokeId),
      }
    case ADD_JOKE_TO_FAVOURITES:
      console.log(state);
      return {
        ...state,
        favouriteJokes: [...state.favouriteJokes, action.joke]
      }
    default:
      return state;
  }
}