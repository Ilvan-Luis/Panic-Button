import { createStore, applyMiddleware }  from "redux"
import RootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof RootReducer>

export default store
