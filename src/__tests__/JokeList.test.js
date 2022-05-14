import React from 'react';
import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import JokeList from '../containers/JokeList/JokeList';
import * as ourActions from '../store/actions';

const useSelectorMock = reactRedux.useSelector;
const useDispatchMock = reactRedux.useDispatch;

// const importantAction = jest.spyOn(ourActions.fetchJokeList, 'importantAction');
const dispatch = jest.fn();
ourActions.fetchJokeList()(dispatch);

const mockStore = {
  jokeList: [
    { id: 1, text: '1' },
    { id: 2, text: '2' },
  ],
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test JokeList', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  it('renders without crashing', () => {
    render(<JokeList />);
  });

  it('shows list of jokes', async () => {
    render(<JokeList />);
    const jokes = await screen.findAllByTestId('joke-item');
    expect(jokes.length).toBe(2);
  });

  it('uses selector properly', () => {
    const getListOfJokes = (state) => state.jokeList;
    render(<JokeList />);
    expect(getListOfJokes(mockStore)).toBe(mockStore.jokeList);
  });
});
