import {createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import {InputReducer} from "../reducer/InputReducer";

export const store = createStore(InputReducer, applyMiddleware(thunk))

//создаю сторе с возможностью асинхронного запроса на соервер через thunk и передачей его в redux applyMiddleware.