module.exports = {
  siteName: 'apparent_dev',
  siteDescription: "A documentation of Alausa Ibrahim's Journey on his path to becoming a black belt developer",
  siteUrl: 'https://gridsome-starter-bleda.netlify.com',
  titleTemplate: `%s | aspiring black belt dev`,
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
        id: 'UA-135446199-1',
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
