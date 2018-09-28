export default {
    theme: './theme.config.js',
    alias: {
        components: `${__dirname}/src/components`,
        utils: `${__dirname}/src/utils`,
        services: `${__dirname}/src/services`,
        models: `${__dirname}/src/models`,
        pages: `${__dirname}/src/pages`,
        assets: `${__dirname}/src/assets`,
    },
    publicPath: '/dist/static/',
    proxy: {
      '/mobile': {
        target: 'http://bitss.pro',
        changeOrigin: true,
      },
    }
}
