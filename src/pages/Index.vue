<template>
  <Layout :homepage="true" class="is-clipped">
    
    <!-- Main section -->
    <section class="hero is-fullheight-with-navbar home-img is-dark">
        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              Wisdom of Wombats
            </h1>
            <h2 class="subtitle">
              Finest improv in English in Zurich
            </h2>
            <div class="level">
              <div class="level-item has-text-centered">
                <g-image class="image" width=200 src="../assets/wow-logo2018_541x290.png" style="{font-align: center}"/>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Hero footer: will stick at the bottom -->
        <footer class="hero-foot">
          <nav class="columns home-link">
            <!--<a class="column home-link-item" :href="nextShow.path">
             <div class="section">
                <h1 class="title">Next show</h1>
                <h2 class="subtitle"><span>{{nextShow.title}} on {{nextShow.date}}</span></h2>
              </div>
            </a>-->
            <next-show />
            <a class="column home-link-item" href="#" v-scroll-to="'#stories'">
              <div class="section">
                <h1 class="title">Our stories</h1>
                <h2 class="subtitle">Discover what we do</h2>
              </div>
            </a>
            <a class="column home-link-item" href="#" v-scroll-to="'#about'">
              <div class="section">
                <h1 class="title">Who we are</h1>
                <h2 class="subtitle">About the Wisdom of Wombats</h2>
              </div>
            </a>
          </nav>
        </footer>

      </section>

      <!-- About section -->
      <section class="section" id="about">
          <div class="container">
            <h1 class="title">About us</h1>
            <h2 class="subtitle">Who are the Wisdom of Wombats</h2>
            <div class="content">
            <p>We are a group of international performers based in Zurich, that create, organize and perform shows using improvisational theater in all its forms.
              We perform mainly in English. Our goal is to push our boundaries and in the improv spirit we always try to get out of our comfort zone.</p>
            <p>Our shows range from a classic game based comedy show (in the style of Whose Line is it Anyway), 
              to long form (think of it as a full theater piece, but completely unscripted) and other more experimental.</p>
          </div>
          <div class="level"><div class="level-item"><a class="button is-info" href="#" v-scroll-to="'#contact'">Let's connect</a></div></div>
        </div> 
      </section>

      <!-- Reviews section -->
      <section class="hero is-primary divider-img is-medium">
        <div class="hero-body">
          <div class="container">
          <h1 class="title has-text-primary">"Bloody brilliant, intermittently hysterical."</h1>
          <h2 class="subtitle">Bloody brilliant, intermittently hysterical. 
            Great Zurich people from all over the world in action, in theater, in English to boot. 
            A real delight – get behind it.</h2>
          <h3 class="heading has-text-right">Anthony G.</h3>
          </div>
        </div>
      </section>

      <!-- VueCarousel https://github.com/fengyuanchen/vue-carousel
      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container">
            <carousel :data="carouselData"></carousel>
          </div>
        </div>
      </section> -->

      <!-- Calendar section -->
      <section class="section hero is-light" id="calendar">
        <div class="hero-head">
          <div class="container">
            <h1 class="title">Calendar</h1>
            <h2 class="subtitle">Our next shows</h2>
          </div>
        </div>

        <div class="hero-body">
          <div class="columns">
            <div class="column is-9 is-offset-1">
              <calendar />
            </div>
          </div>
        </div>
      </section>
    
      <!-- Interlude section -->
      <section class="hero">
        <figure class="image">
          <g-image src="../assets/improv-draft-16.jpg" />
        </figure>
      </section>

      <!-- Stories section -->
      <section class="section hero is-light" id="stories">
        <div class="hero-head">
          <div class="container">
            <h1 class="title">Stories</h1>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <stories />
          </div>
        </div>
      </section>

      <!-- Contacts section -->
      <section class="section hero is-light" id="contact">
        <div class="hero-head">
          <div class="container">
            <h1 class="title">Let's connect</h1>
            <h2 class="subtitle">Do you want to keep in touch with us? Here's how.</h2>
          </div>
        </div>

        <div class="hero-body">
          <div class="level container">
            <a class="level-item has-text-centered" href="mailto:wisdom@wombats.ch">
              <div>
                <p class="icon has-text-dark"><font-awesome :icon="['fas','envelope']" :size="'4x'" /></p>
                <p>Drop us an email</p>
                <p class="is-uppercase has-text-weight-bold">wisdom@wombats.ch</p>
              </div>
            </a>
            <a class="level-item has-text-centered" href="https://www.facebook.com/wombatsimprov" target="_blank">
              <div>
                <p class="icon has-text-dark"><font-awesome :icon="['fab', 'facebook-square']" :size="'4x'" /></p>
                <p>Like us on Facebook</p>
                <p class="is-uppercase has-text-weight-bold">@WombatsImprov</p>
              </div>
            </a>
            <a class="level-item has-text-centered" href="https://www.instagram.com/wombatsimprov/" target="_blank">
              <div>
                <p class="icon has-text-dark"><font-awesome :icon="['fab', 'instagram']" :size="'4x'" /></p>
                <p>Follow us on Instagram</p>
                <p class="is-uppercase has-text-weight-bold">@WombatsImprov</p>
              </div>
            </a>
            <a class="level-item has-text-centered" href="https://www.meetup.com/Pop-up-Performances/" target="_blank">
              <div>
                <p class="icon has-text-dark"><font-awesome :icon="['fab', 'meetup']" :size="'4x'" /></p>
                <p>Join our Meetup group</p>
                <p class="is-uppercase has-text-weight-bold">Pop up Performances</p>
              </div>
            </a>
            <a class="level-item has-text-centered" href="#" v-scroll-to="'#calendar'">
              <div>
                <p class="icon has-text-dark"><font-awesome :icon="['fas','grin']" :size="'4x'" /></p>
                <p>Meet us in person!</p>
              </div>
            </a>
          </div>
        </div>

        <div class="section">
          <newsletter-subscribe class="container" />
        </div>

      </section>


      <div class="modal" v-bind:class="{'is-active': popupNewsletter}" v-on:click="popupClickOutside">
        <newsletter-subscribe-modal v-on:close-popup="closePopupNewsletter" />
      </div>

  </Layout>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import Stories from '~/components/Stories.vue'
import NewsletterSubscribe from '~/components/NewsletterSubscribe.vue'
import NewsletterSubscribeModal from '~/components/NewsletterSubscribeModal.vue'
import NextShow from '~/components/NextShow.vue'

export default {
  name: "Home",
  components: {
    Calendar,
    Stories,
    NewsletterSubscribe,
    NewsletterSubscribeModal,
    NextShow
  },
  metaInfo() { return {
    title: 'Home',
    script: [
      {
        key: 'owaTrackerCode',
        innerHTML: `//<![CDATA[
          var owa_baseUrl = 'https://wombats.ch/owa/';
          var owa_cmds = owa_cmds || [];
          owa_cmds.push(['setSiteId', '` + process.env.GRIDSOME_OWA_SITE_ID + `']);
          owa_cmds.push(['setPageType','home'])
          owa_cmds.push(['trackPageView']);
          owa_cmds.push(['trackClicks']);
          //]]>`,
        type:"text/javascript"
      }
    ],
    link: [{
      key: 'canonical',
      rel: 'canonical',
      href: 'https://wombats.ch'
    }]
  }},
  data() {
    return {
      instaToken: '10835943873.7115bff.19834ca1a1114f5c91b2c3b9577d008f',
      popupNewsletter: false,
      carouselData: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>'
      ]
     }
  },
  methods: {
    activatePopupNewsletter() {
      if (!this.$cookie.get('popupShown')){
        setTimeout(()=>{
          this.popupNewsletter = true
        }, 10000)
      }
    },
    closePopupNewsletter() {
      this.popupNewsletter = false
      //Set a cookie to avoid to show the popup to a returning user - expires in 5 days
      this.$cookie.set('popupShown', true, 5)
    },
    popupClickOutside(event){
      if (event.target.id == 'popup-bkg') {
        this.closePopupNewsletter()
      }
    }
  },
  computed: {
    nextShow: function() {
      if (this.$static.events.edges.length != 0){
        return this.$static.events.edges[0].node
      }
    }
  },
  mounted() {
    this.activatePopupNewsletter()
  }
}
</script>

<static-query>
query Events {
  events: allWordPressTribeEvents (sortBy:"date", order:ASC, perPage:1, page:1) {
    edges {
      node {
        title
        date (format: "D MMMM YYYY")
        venueName
        path
      }
    }
  }
}
</static-query>

<style>
.home-img { 
    background-image: url('../assets/RUXI0811.jpg');
    background-position: left;

    background-size:cover; 
    background-attachment: fixed;
    background-repeat: no-repeat;
}

.divider-img {
    background-image: url('../assets/IMG_4237-crop.jpg');
    background-position: right;
    background-size:cover; 
    background-attachment: fixed;
    background-repeat: no-repeat;
}
</style>
