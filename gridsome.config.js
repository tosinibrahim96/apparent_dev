module.exports = {
  siteName: 'apparentdev',
  siteDescription: "read, reflect, implement, and share",
  siteUrl: 'https://www.apparentdev.com/',
  titleTemplate: `%s | read, reflect, implement, and share`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-159331346-1',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
  ],

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || [],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }

        return options
      })
  },
}
