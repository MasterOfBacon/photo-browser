import {
    SET_IMAGES,
    SET_PAGE,
    SET_SINGLE_IMAGE
} from '../actions/actionTypes'

import {
    ImageListState
} from '../types'

export const initialState = {
    imageList: [],
    page: 1,
    limit: 20,
    image: {}
}

import { Reducer } from 'redux'

const imageList: Reducer<ImageListState> = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES: {
            return {
                ...state,
                imageList: action.imageList
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case SET_SINGLE_IMAGE: {
            return {
                ...state,
                image: action.image
            }
        }
        default: {
            return state
        }
    }
}

export default imageList
