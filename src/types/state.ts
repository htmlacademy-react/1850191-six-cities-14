import { store } from '../store/configure-store';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
