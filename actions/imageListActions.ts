import {
    SET_IMAGES,
    SET_PAGE,
    SET_SINGLE_IMAGE
} from './actionTypes'

import {
    Photos,
    SingleImage
} from '../types'
import { Dispatch } from '../types/redux'

import * as API from '../logic/API'

export function setImages(images: Photos | Array<object>) {
    return {
        type: SET_IMAGES,
        imageList: images
    }
}

export function setPage(page: number) {
    return {
        type: SET_PAGE,
        page
    }
}

export function setSingleImage(image: SingleImage | Object) {
    return {
        type: SET_SINGLE_IMAGE,
        image
    }
}

export function fetchImages(page: number, limit: number) {
    return async (dispatch: Dispatch) => {
        try {
            const images = await API.getImages(page, limit, null)
            dispatch(setImages(images))
        } catch (err) {
            console.log('Error fetching images')
        }
    }
}

export function fetchSingleImage(imageid: string) {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(setSingleImage({}))
            const image = await API.getSingleImage(imageid)
            dispatch(setSingleImage(image))
        } catch (err) {
            console.log('Error fetching single image')
        }
    }
}
