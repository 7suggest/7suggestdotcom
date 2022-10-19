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
        babywalker: './baby-walker/index.html',
        babywalkerbuyingguide: './baby-walker/buying-guide.html',
        babywalkerbestbabywalkerforhardwoodfloors: './baby-walker/best-baby-walker-for-hardwood-floors.html',
      }
    }
  }
})
