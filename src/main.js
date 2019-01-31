// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import '~/assets/scss/styles.scss'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.bodyAttrs = { class: 'has-navbar-fixed-top', id:'top' }
  head.link.push({
    rel:'stylesheet',
    href:'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
  })
  Vue.use(VueScrollTo, {
    offset:-65
  })
}