import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin'; // tslint:disable-line:no-implicit-dependencies

const Config: webpack.Configuration = {
  devServer: {
    contentBase: '/assets',
    publicPath: '/'
  },
  entry: [
    './src/index.tsx',
    './src/index.scss',
  ],
  module: {
    loaders: [
      {
        enforce: 'pre',
        loader: 'tslint-loader',
        test: /\.ts(x)?$/,
      },
      {
        loader: 'babel-loader',
        test: /\.ts(x)?$/,
      },
      {
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
        test: /\.(css|scss)$/,
      },
      {
        loader: 'file-loader',
        test: /\.(woff(2)?|ttf)$/,
        options: {
          name: "fonts/[name].[ext]",
        },
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};

export default Config;
