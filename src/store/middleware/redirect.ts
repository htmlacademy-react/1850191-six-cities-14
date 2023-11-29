import {PayloadAction, configureStore} from '@reduxjs/toolkit';

import {Middleware} from 'redux';
import browserHistory from '../../providers/history-route/browser-history';


type Reducer = ReturnType<typeof configureStore>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
