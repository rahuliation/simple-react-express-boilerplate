var config = {
   entry: './reactapp/index.js',
   

   output: {
      path:'./public/javascripts/',
      filename: 'app.js',
   },


   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         	
         }
      ]
   },
   
}

module.exports = config;
