const presets = [
  [
    '@babel/preset-env',
    {
      modules: 'umd',
      loose: true,
      targets: {
        edge: '8',
        firefox: '40',
        chrome: '30',
        safari: '6',
      },
      useBuiltIns: 'usage',
    },
  ],
  // [
  //   '@babel/preset-react'
  // ],
];

const plugins = [
];

module.exports = { presets, plugins };