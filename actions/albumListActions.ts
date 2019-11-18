import {
    SET_ALBUMS,
    SET_ALBUM_IMAGES,
    SET_ALBUM
} from './actionTypes'

import {
    Albums,
    Photos
} from '../types'
import { Dispatch } from '../types/redux'

import * as API from '../logic/API'

export function fetchAlbums(page: number | null, limit: number | null) {
    return async (dispatch: Dispatch) => {
        try {
            const images = await API.getAlbums(page, limit)
            dispatch(setAlbums(images))
        } catch (err) {
            console.log('Error fetching images')
        }
    }
}

export function setAlbums(albums: Albums | Array<object>) {
    return {
        type: SET_ALBUMS,
        albums
    }
}

export function setAlbumImages(albumImages: Photos | Array<object>) {
    return {
        type: SET_ALBUM_IMAGES,
        albumImages
    }
}

export function setAlbum(albumId: number) {
    return {
        type: SET_ALBUM,
        albumId
    }
}

export function fetchAlbumImages(albumId: number) {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(setAlbum(albumId))
            const albumImages = await API.getImages(null, null, albumId)
            dispatch(setAlbumImages(albumImages))
        } catch (err) {
            console.log('Error fetching single image')
        }
    }
}
