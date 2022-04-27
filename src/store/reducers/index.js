import {
  CHANGE_JOKELIST, TOGGLE_JOKE_TO_FAVOURITES
} from "../../constants";

const initialState = {
  jokeList: [],
  favouriteJokes: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_JOKELIST:
      return {
        ...state,
        jokeList: action.payload
      }
    case TOGGLE_JOKE_TO_FAVOURITES:
      return {
        ...state,
        jokeList: state.jokeList.map(joke => {
          if (joke.favourited && joke.id === action.jokeId) {
            return {
              ...joke,
              favourited: false
            }
          }

          if (!joke.favourited && joke.id === action.jokeId) {
            return {
              ...joke,
              favourited: true
            }
          }

          return joke;
        }),
        favouriteJokes: state.jokeList.filter(joke => joke.favourited)
      }
    default:
      return state;
  }
}