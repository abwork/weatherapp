import {combineReducers} from "redux";

import FetchWeather from "./FetchWeather";
import FetchLocation from "./FetchLocation";
import FetchConditions from "./FetchConditions";

const reducers= combineReducers({
    FetchWeatherReducer : FetchWeather,
    FetchWeatherLocation: FetchLocation,
    FetchCurrentConditions: FetchConditions
});

export default reducers;