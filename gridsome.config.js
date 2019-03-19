// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart to work properly.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Wisdom of Wombats',
  plugins: [
    {
      use: '@gridsome/source-wordpress-event',
      options: {
        baseUrl: 'http://wombats.ch',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/post/:slug',
          post_tag: '/tag/:slug',
          tribe_event: '/event/:slug'
        }
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}