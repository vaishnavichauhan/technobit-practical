import { combineReducers } from "redux";
import CounterReducer from "./counterreducer";

const RootReducer = combineReducers({
    cnt:CounterReducer,
})
export default RootReducer