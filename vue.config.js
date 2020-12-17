module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },

  publicPath: process.env.NODE_ENV === 'production'
  ? '/portafolio/'
  : '/',

  transpileDependencies: ['vuetify'],
}
