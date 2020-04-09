/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
module.exports = {
  /* Your site config here */
  plugins:[
    {
      resolve:'gatsby-source-filesystem',
      options:{
        path: path.join(__dirname,'src','images'),
        name:'images'
      }
    },    
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
    {
      resolve:'gatsby-plugin-create-client-paths',
      options:{
        prefixes:[`/app/*`]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options:{
        name: `Mi primer sito con Gatsby`,
        short_name: `MPSCG`,
        start_url:`/`,
        background_color:`#262B34`,
        theme_color: `#EC6ECE`,
        display:`standalone`,
        icon:`src/images/icons/doctor-icon.png`
      }
    },
    {
      resolve:'gatsby-plugin-offline',
      options:{
        precachePage:['/about']
      }
    }

  ]
}
