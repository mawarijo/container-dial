import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import NewTabPage from './components/NewTabPage';
import getTheme from './utils/getTheme';
import DIALS from './DIALS';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const renderApp = () => {
  const container = {
    color: 'green',
    name: 'Default'
  };

  const theme = getTheme(container.color);

  ReactDOM.render(
    <Provider store={store}>
      <NewTabPage container={container} theme={theme} dials={DIALS} />
    </Provider>,
    document.getElementById('page')
  );
};

renderApp();

registerServiceWorker();
