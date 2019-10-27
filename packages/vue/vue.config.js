module.exports = {
  outputDir: './dist',
  assetsDir: './assets',
  css: {
    sourceMap: true
  },
  pwa: {
    themeColor: '#090B0D'
  },
  devServer: {
    proxy: process.env.NODE_ENV == 'production' ? '' : 'http://localhost:3000'
  }
};
