module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://api.greenpeace.org.hk/2021/elm"
      : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/scss/global.scss";`
      }
    }
  },
  outputDir: "build",
  assetsDir: "static",
  filenameHashing: true,
  /*
  configureWebpack: {
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new PrerenderSPAPlugin({
              staticDir: path.join(__dirname, "build"),
              routes: ["/"],
              postProcess(renderedRoute) {
                renderedRoute.html = renderedRoute.html.replace(
                  /<script (.*?)>/g,
                  `<script $1 defer>`
                );
                renderedRoute.html = renderedRoute.html.replace(
                  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                  ""
                );
                const bodyEnd = renderedRoute.html.indexOf("</body>");
                renderedRoute.html =
                  renderedRoute.html.substr(0, bodyEnd) +
                  extraScripts +
                  renderedRoute.html.substr(bodyEnd);
                return renderedRoute;
              }
            })
          ]
        : []
  },
  */
  devServer: {
    disableHostCheck: true
  }
};
