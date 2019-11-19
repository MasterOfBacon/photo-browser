const withCSS = require('@zeit/next-css')
const axios = require('axios')

const backendUrl = 'https://jsonplaceholder.typicode.com/photos'

module.exports = withCSS({
    onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 60
    },
    exportPathMap: async function (defaultPathMap) {
        const response = await axios.get(backendUrl)
        const photoList = response.data
        const imagePages = photoList.reduce((pages, post) =>
            Object.assign({}, pages, {
                [`/images/${post.id}`]: { page: '/images/[id]' },
                [`/albums/images/${post.id}`]: { page: `/albums/images/[id]` }
            }), {}
        )

        const combined = Object.assign({}, defaultPathMap, imagePages)
        return combined
    },
})
