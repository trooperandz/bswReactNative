module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          tests: ['./tests/'],
          '@assets': ['src/assets'],
          '@components': './src/components',
          '@features': './src/features',
          '@navigations': './src/nagivations',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
