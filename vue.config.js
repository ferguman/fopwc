module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'visitor': {
      entry: './src/pages/Visitor/main.js',
      template: 'public/index.html',
      title: 'Visitor',
      chunks: ['chunk-vendors', 'chunk-common', 'visitor']
    }
  }
}
