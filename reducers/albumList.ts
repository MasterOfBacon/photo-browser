import {
    SET_ALBUMS,
    SET_ALBUM_IMAGES,
    SET_ALBUM
} from '../actions/actionTypes'

import {
    AlbumListState
} from '../types'
import { Reducer } from 'redux'

const initialState = {
    albums: [],
    albumImages: [],
    albumId: 0
}

const albumList: Reducer<AlbumListState> = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS: {
            return {
                ...state,
                albums: action.albums
            }
        }
        case SET_ALBUM: {
            return {
                ...state,
                albumId: action.albumId
            }
        }
        case SET_ALBUM_IMAGES: {
            return {
                ...state,
                albumImages: action.albumImages
            }
        }
        default: {
            return state
        }
    }
}

export default albumList
