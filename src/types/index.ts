export interface JokeType {
  id: number,
  setup: string,
  punchline: string,
}

export interface IRootState {
  jokeList: JokeType[]
}