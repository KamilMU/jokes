import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import * as actions from '../store/actions'
import * as types from '../constants'

describe('actions', () => {
  it('should create an action to fetchjokes', () => {
    const payload = [
      {id: 1, setup: '2+2?', punchline: '4'},
      {id: 2, setup: '3+2?', punchline: '5'}
    ];

    const expectedAction = {
      type: types.CHANGE_JOKELIST,
      payload
    };

    expect(actions.fetchJokeList()).toEqual(expectedAction)
  })
})

beforeEach(async () => {
  const payload = [
    {id: 1, setup: '2+2?', punchline: '4'},
    {id: 2, setup: '3+2?', punchline: '5'}
  ];
  actions.fetchJokeList();
})

// afterEach(() => {
//   cleanup();
// })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});