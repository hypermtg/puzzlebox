module.exports = {
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = 'Teferi\'s Puzzle Box';
                return args;
            });
    }
}