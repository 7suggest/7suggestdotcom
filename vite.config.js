const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        privacy: './privacy.html',
        disclamer: './disclamer.html',
        contact: './contact.html',
        cleaner: './cleaner/index.html',
        babywalker: './baby-walker/index.html',
      }
    }
  }
})
