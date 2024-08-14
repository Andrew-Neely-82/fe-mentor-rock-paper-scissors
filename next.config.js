const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/fe-mentor-rock-paper-scissors" : "",
  assetPrefix: isProd ? "/fe-mentor-rock-paper-scissors/" : "",
  publicRuntimeConfig: {
    basePath: isProd ? "/fe-mentor-rock-paper-scissors" : "",
  },
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};
