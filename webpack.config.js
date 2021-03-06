module.exports = {
    mode: 'development',
    entry: {
        'from-dom': './src/from-dom.js',
        'with-browser-report': './src/with-browser-report.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
