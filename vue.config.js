module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/main.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/scrum-playground/' : '/'
}