const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/fe-mentor-rock-paper-scissors' : '',
  assetPrefix: isProd ? '/fe-mentor-rock-paper-scissors/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  publicRuntimeConfig: {
    basePath: isProd ? '/fe-mentor-rock-paper-scissors' : '',
  },
};
