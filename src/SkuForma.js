import * as React from 'react';
import { AppNavigation } from './AppNavigation';
import { Provider as ReduxProvider } from 'react-redux';
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider as PaperProvider } from 'react-native-paper';
import { Reducer } from './reducers';


const logger = createLogger({
    // ...options
});

const Store = createStore(
    Reducer,
    {},
    // compose(applyMiddleware(thunk), applyMiddleware(logger))
    compose(applyMiddleware(thunk))
);

export default function SkuForma() {
  return (
    <ReduxProvider store={Store}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
}

export { SkuForma };
