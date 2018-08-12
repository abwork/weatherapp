import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; 
import logger from "redux-logger"; 

import Reducers from "../reducers/reducers";

const middleware= applyMiddleware(logger, thunk);

const Store= createStore(Reducers, middleware);

export default Store;