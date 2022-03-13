const { resolve } = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js/,
      include: resolve('./node_modules/@chakra-ui'),
      loader: 'chakra-ui-optimization-loader',
      options: {
        ignoreComponents: ['Alert', 'Table', 'Tabs', 'Slider', 'AspectRatio', 'RangeSlider', 'Badge', ],
        ignoreColors: [
          'facebook',
          'purple',
          'green',
          'pink',
          'linkedin',
          'facebook',
          'messenger',
          'whatsapp',
          'twitter',
          'telegram',
        ],
        ignoreBreakpoints: ['xl', '2xl'],
      },
    });

    return config;
  },
});
