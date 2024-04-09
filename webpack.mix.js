const mix = require('laravel-mix');

mix.options({
  processCssUrls: false
})
  .disableNotifications()
  .setPublicPath('public')
  .version();

mix.js('resources/assets/js/app.js', 'assets/dist/js')
  .sourceMaps();

mix.combine([
  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
], 'public/assets/dist/js/dependencies.js');

mix.sass('resources/assets/sass/app.scss', 'assets/dist/css')
  .sass('resources/assets/sass/app-dark.scss', 'assets/dist/css');

mix.webpackConfig({
  plugins: [
    new InjectManifest({
      swSrc: './resources/js/service-worker.js',
    }),
  ],
  output: {
    publicPath: '',
  },
});
