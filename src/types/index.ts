export interface JokeType {
  id: number,
  setup: string,
  punchline: string,
  favourited: boolean,
}

export interface IRootState {
  jokeList: JokeType[],
  favouriteJokes: JokeType[],
  jokeStatus: string
}
