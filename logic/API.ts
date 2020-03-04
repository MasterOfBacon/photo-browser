const axios = require('axios')

const backendUrl = 'https://api.unsplash.com'
const accessKey = 'ACCESS_KEY_HERE'

export const getImages = async (_page: number | null, _limit: number | null) => {
    try {
        const response = await axios.get(`${backendUrl}/photos`, {
            params: {
                page: _page,
                per_page: _limit,
                client_id: accessKey
            }
        })
        if (response.status !== 200) {
            console.log('Error fetching photos from server, Error: ', response)
            return []
        }
        return response.data
    } catch (err) {
        console.log('Error fetching photos from server, Error: ', err.response)
        return []
    }
}

export const getSingleImage = async (imageid: string) => {
    try {
        const response = await axios.get(`${backendUrl}/photos/${imageid}?client_id=${accessKey}`)
        if (response.status !== 200) {
            console.log('Error fetching photos from server, Error: ', response)
            return {}
        }
        return response.data
    } catch (err) {
        console.log('Error fetching photos from server, Error: ', err.response)
        return {}
    }
}

export const getAlbums = async (_page: number | null, _limit: number | null) => {
    try {
        const response = await axios.get(`${backendUrl}/collections/featured`, {
            params: {
                page: _page,
                per_page: _limit,
                client_id: accessKey
            }
        })
        if (response.status !== 200) {
            console.log('Error fetching albums from server, Error: ', response)
            return []
        }
        return response.data
    } catch (err) {
        console.log('Error fetching albums from server, Error: ', err.response)
        return []
    }
}

export const getAlbumPhotos = async (_page: number | null, _limit: number | null, albumId: string | null) => {
    try {
        const response = await axios.get(`${backendUrl}/collections/${albumId}/photos`, {
            params: {
                page: _page,
                per_page: _limit,
                client_id: accessKey
            }
        })
        if (response.status !== 200) {
            console.log('Error fetching albums from server, Error: ', response)
            return []
        }
        return response.data
    } catch (err) {
        console.log('Error fetching albums from server, Error: ', err.response)
        return []
    }
}
