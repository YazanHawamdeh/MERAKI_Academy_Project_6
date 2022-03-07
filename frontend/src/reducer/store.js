import { combineReducers, createStore } from "redux";

import loginReducer from "./login";
import hotelsReducer from "./hotels";
import cartsReducer from "./cart/carts";
import wishListsReducer from "./wishLists";
import usersReducer from "./users/users";

const reducers = combineReducers({ loginReducer,hotelsReducer,usersReducer });

const store = createStore(reducers);

export default store;