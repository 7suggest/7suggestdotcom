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
        babywalker_buying_guide: './baby-walker/buying-guide.html',
        babywalker_best_baby_walker_for_hardwood_floors: './baby-walker/best-baby-walker-for-hardwood-floors.html',
      }
    }
  }
})
