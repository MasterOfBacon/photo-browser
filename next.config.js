const withCSS = require('@zeit/next-css')
const axios = require('axios')

module.exports = withCSS({
    onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 60
    },
    exportPathMap: async function (defaultPathMap) {
    console.log('defaultPathMap ---------- : ', defaultPathMap)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    const photoList = response.data
    const imagePages = photoList.reduce((pages, post) =>
    Object.assign({}, pages, {
        [`/images/${post.id}`]: { page: '/images/[id]' },
    }),
    {}
    )
    
    const responseAlbums = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
    const albumList = responseAlbums.data
    const albumPages = albumList.reduce((pages, post) =>
        Object.assign({}, pages, {
            [`/albums/images/${post.id}`]: { page: `/albums/images/[id]` },
        }),
        {}
    )

    const combined = Object.assign({}, defaultPathMap, imagePages, albumPages)
        return combined
    },
})
