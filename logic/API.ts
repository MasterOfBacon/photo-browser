const axios = require('axios')

const backendUrl = 'https://jsonplaceholder.typicode.com'

export const getImages = async (_page: number | null, _limit: number | null, albumId: number | null) => {
    try {
        const response = await axios.get(`${backendUrl}/photos`, {
            params: {
                _page,
                _limit,
                albumId
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
        const response = await axios.get(`${backendUrl}/photos/${imageid}`)
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
        const response = await axios.get(`${backendUrl}/albums`, {
            params: {
                _page,
                _limit
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
