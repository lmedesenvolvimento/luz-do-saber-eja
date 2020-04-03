const externalCSS = require('@zeit/next-css')
module.exports = externalCSS()

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
        '/projeto': { page: '/projeto' },
        '/contato': { page: '/contact' },
        '/download': { page: '/download' },
    }),
    publicRuntimeConfig: {
        basePath: ''
    },
    assetPrefix: prod ? 'http://fundamental.luzdosaber.virtual.ufc.br/' : '',
}

// GITHUB
// publicRuntimeConfig: {
//     basePath: prod ? '/luz-do-saber-fundamental' : ''
// },