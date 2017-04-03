module.exports = (ctx) => ({
    parser: ctx.parser
        ? 'sugarss'
        : false,
    map: ctx.env === 'development'
        ? ctx.map
        : false,
    plugins: {
        'postcss-nested': {},
        'postcss-define-function': {},
        'postcss-simple-vars': {},
        cssnano: ctx.env === 'production'
            ? {}
            : false
    }
})
