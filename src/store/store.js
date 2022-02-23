/* Importer les reducers créés */

import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/product-reducer";

const reducer = combineReducers({
    /* On appelle le reducer par un nom spécifique et simple (ici éproduct") */
    product: productReducer
});

/* On créé le store  */
const store = createStore(reducer);

/* On exporte le store */

export default store;