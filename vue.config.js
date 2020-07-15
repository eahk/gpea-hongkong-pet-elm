const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://api.greenpeace.org.hk/2020/petition/zh-hk.2019.general.elm.general.signup.na.mc/"
      : "/",
  filenameHashing: false,
  css: {
    loaderOptions: {
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        prependData: `@import "~@/styles/scss/global.scss";`
      }
    }
  },

  outputDir: 'build',

  assetsDir: 'static',

  filenameHashing: true,

  configureWebpack:  {
    plugins: process.env.NODE_ENV === 'production' ? [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'build'),
        // Required - Routes to render.
        routes: [ '/'],
      })
    ] : []
  },
  devServer: {
    disableHostCheck: true
  }
};
