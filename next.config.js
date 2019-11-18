const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60
  },
})
