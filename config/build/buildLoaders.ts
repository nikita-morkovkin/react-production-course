import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      MiniCssExtractPlugin.loader, "css-loader",
      "sass-loader",
    ],
  }

  return [
    typescriptLoader,
    styleLoader,
  ]
}