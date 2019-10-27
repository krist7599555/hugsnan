module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
        // polyfills: ['es7.object.entries']
      }
    ]
  ]
};
