// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
// import VueInstagram from 'vue-instagram'
import '~/assets/scss/styles.scss'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.bodyAttrs = { class: 'has-navbar-fixed-top', id:'top' }
  head.link.push({
    rel:'stylesheet',
    href:'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
  }),
  // 7c4439b1f96509791a4d3967c4a64176  -> official site ID
  // 37d007a56d816107ce5b52c10342db37  -> test site ID
  head.script.push({
    key: 'owaTrackerCode',
    innerHTML: `//<![CDATA[
      var owa_baseUrl = 'https://wombats.ch/owa/';
      var owa_cmds = owa_cmds || [];
      owa_cmds.push(['setSiteId', '7c4439b1f96509791a4d3967c4a64176']);
      owa_cmds.push(['setPageType','home'])
      owa_cmds.push(['trackPageView']);
      owa_cmds.push(['trackClicks']);
      
      (function() {
        var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
        owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
        _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
        var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
      }());
      //]]>`,
    type:"text/javascript"
  }),
  Vue.use(VueScrollTo, {
    offset:-65
  })
  // Vue.use(VueInstagram)
}