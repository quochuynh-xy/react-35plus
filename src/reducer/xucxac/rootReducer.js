import { combineReducers } from "redux";
import xucxac from "./xucXac_Reducer";
import player from "./player_Reducer";
const rootReducer = combineReducers({
    xucxac : xucxac,
    player
})
export default rootReducer