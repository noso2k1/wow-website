// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueCookie from 'vue-cookie'
import VueMoment from 'vue-moment'
// import VueCarousel from '@chenfengyuan/vue-carousel'
// import VueInstagram from 'vue-instagram'
import '~/assets/scss/styles.scss'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.bodyAttrs = { class: 'has-navbar-fixed-top', id:'top' }
  head.script.push({
    key: 'owaScript',
    src: 'https://wombats.ch/owa/modules/base/js/owa.tracker-combined-min.js',
    async: true
  })
  head.script.push({
    key: 'pixelCode',
    innerHTML: `
      <!-- Facebook Pixel Code -->
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '327161094587034'); 
      fbq('track', 'PageView');  
      `
  })
  head.noscript.push({
    key: 'pixelCodeNoScript',
    innerHTML: `<img height="1" width="1" src="https://www.facebook.com/tr?id=327161094587034&ev=PageView &noscript=1"/>`
  })
  // <link rel="canonical" href="http://example.com/">
  head.meta.push({
    key: 'keywords',
    name: 'keywords',
    content: 'wombats,wombat,wisdom,company,improv,zurich,comedy,theater,theatre,improvisation,spontaneity,stage,bühne,impro,show,popup,switzerland,schweyz,live,performance'
  })
  Vue.use(VueScrollTo, {
    offset:-65
  })
  Vue.use(VueCookie)
  Vue.use(VueMoment)
  // Vue.use(VueCarousel)
  // Vue.use(VueInstagram)
}