const withCSS = require('@zeit/next-css')
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
            [`${assetPrefix}/albums/images/${post.id}`]: { page: `${assetPrefix}/albums/images/[id]` },
        }),
        {}
    )

    const combined = Object.assign({}, defaultPathMap, imagePages, albumPages, {
        // [`${assetPrefix}/`]: { page: '/' },
        // [`${assetPrefix}/_app`]: { page: '/_app' },
        // [`${assetPrefix}/images`]: { page: '/images' },
        // [`${assetPrefix}/albums`]: { page: '/albums' },
        // [`${assetPrefix}/images/[id]`]: { page: '/images/[id]' },
        // [`${assetPrefix}/albums/images/[id]`]: { page: '/photo-browser/albums/images/[id]' },
    })
        return combined
    },
})
