const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', {
                            "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
                            "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
                            "throwIfNamespace": false, // defaults to true
                            "runtime": "classic" // defaults to classic
                            // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
                        }]],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
    },
};