const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/my-nextjs-project' : '',
  assetPrefix: isProd ? '/my-nextjs-project/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  publicRuntimeConfig: {
    basePath: isProd ? '/my-nextjs-project' : '',
  },
};
