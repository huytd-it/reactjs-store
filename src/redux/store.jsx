import { createStore, applyMiddleware  } from "redux";
import { persistStore} from 'redux-persist';
import logger from "redux-logger";
import rootRecuder from "./root-recuder";

const middlewares = [logger];

export const store = createStore(rootRecuder, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

