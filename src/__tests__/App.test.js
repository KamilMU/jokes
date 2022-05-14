import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import App from '../components/App/App';
import { store } from '../store';

describe('App test', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
