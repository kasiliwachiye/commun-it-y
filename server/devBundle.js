import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./../webpack.config.client.js";
import config from "./../config/config";

const compile = (app) => {
  if (config.env === "development") {
    const compiler = webpack(webpackConfig);

    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        chunks: false,
        "errors-only": true,
      },
    });

    app.use(middleware);

    app.use(
      webpackHotMiddleware(compiler, {
        log: console.log,
        path: "/__webpack_hmr",
        heartbeat: 10 * 1000,
      })
    );

    console.log("Webpack middleware and hot reloading are enabled.");
  }
};

export default {
  compile,
};
