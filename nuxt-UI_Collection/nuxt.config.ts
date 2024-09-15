// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/color-mode',
      ],
      purgeCSS: {
        whitelist: ['dark-mode'],
      },
      colorMode: {
        classSuffix: ''
      },
    

})