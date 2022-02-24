/* Importer les reducers créés */

import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/product-reducer";
import { weatherReducer } from "./reducers/weather-reducer";
import reduxThunk from "redux-thunk";

const reducer = combineReducers({
    /* On appelle le reducer par un nom spécifique et simple (ici "product") */
    product: productReducer,
    weatherCategory: weatherReducer
});

/* On créé le store  */
/* Création du middleware redux-thunk */
const store = createStore(reducer, applyMiddleware(reduxThunk));




/* On exporte le store */

export default store;