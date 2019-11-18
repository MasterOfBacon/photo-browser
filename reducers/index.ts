import { combineReducers } from "redux"
import imageList from "./imageList"
import albumList from "./albumList"

export default combineReducers({
    imageList,
    albumList
})
