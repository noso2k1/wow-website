<template>
  <div class="layout">
    <a class="button is-text has-text-primary" id="btnToTop" href="#" v-scroll-to="'#top'" v-bind:style="{display: btnToTopDisplay}">
      <span class="icon"><i class="fas fa-chevron-circle-up fa-lg"></i></span><span>Back to top</span>
    </a>
    <header class="navbar is-fixed-top is-primary">
      <div class="navbar-brand">
        <g-link class="navbar-item" :to="{name:'home'}">
            <span class="level-item"><img src="../assets/wow-logo2018_small.png" alt="Wisdom of Wombats" class="image" /></span>
            <span class="level-item">Wisdom of Wombats</span>
        </g-link>
        <a role="button" class="navbar-burger burger" data-target="navbarMenu" v-on:click="toggleBurger()" v-bind:class="{'is-active': burgerActive}">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div v-if="homepage" id="navbarMenu" class="navbar-menu" v-bind:class="{'is-active': burgerActive}">
        <div class="navbar-end">
          <g-link class="navbar-item" href="#" v-scroll-to="'#top'" v-on:click="toggleBurger()">Home</g-link>
          <a class="navbar-item" v-scroll-to="'#about'" v-on:click="toggleBurger()">About us</a>
          <a class="navbar-item" v-scroll-to="'#calendar'" v-on:click="toggleBurger()">Calendar</a>
          <a class="navbar-item" v-scroll-to="'#stories'" v-on:click="toggleBurger()">Stories</a>
          <!--<a class="navbar-item" v-scroll-to="'#impressions'" v-on:click="toggleBurger()">Impressions</a>-->
          <a class="navbar-item" v-scroll-to="'#contact'" v-on:click="toggleBurger()">Let's connect</a>
          <a class="navbar-item" href="https://www.facebook.com/wombatsimprov" target="_blank"><span class="icon"><i class="fab fa-facebook-f"></i></span></a>
          <a class="navbar-item" href="https://www.instagram.com/wombatsimprov/" target="_blank"><span class="icon"><i class="fab fa-instagram"></i></span></a>
          <a class="navbar-item" href="mailto:wisdom@wombats.ch"><span class="icon"><i class="fas fa-envelope"></i></span></a>
        </div>
      </div>
      <div v-if="!homepage" id="navbarMenu" class="navbar-menu" v-bind:class="{'is-active': burgerActive}">
        <div class="navbar-end">
          <g-link class="navbar-item" :to="{name:'home'}">Home</g-link>
          <a class="navbar-item" href="/#about">About us</a>
          <a class="navbar-item" href="/#calendar">Calendar</a>
          <a class="navbar-item" href="/#stories">Stories</a>
          <a class="navbar-item" href="/#contact">Let's connect</a>
          <!--<a class="navbar-item" href="/#impressions">Impressions</a>-->
          <a class="navbar-item" href="https://www.facebook.com/wombatsimprov" target="_blank"><span class="icon"><i class="fab fa-facebook-f"></i></span></a>
          <a class="navbar-item" href="https://www.instagram.com/wombatsimprov/" target="_blank"><span class="icon"><i class="fab fa-instagram"></i></span></a>
          <a class="navbar-item" href="mailto:wisdom@wombats.ch"><span class="icon"><i class="fas fa-envelope"></i></span></a>
        </div>
      </div>
    </header>

    <!-- This is where we add the page content -->
    <slot/>

    <footer class="footer has-text-white">
      <div class="content has-text-centered">
        <p>Website design by <b>Wisdom of Wombats</b>.</p>
        <p>Made with Bulma and Gridsome.</p>
      </div>
    </footer>

    <footer>
      <cookie-law theme="dark-lime"></cookie-law>
    </footer>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw },
  data: function() {
    return {
      burgerActive: false,
      btnToTopDisplay: 'none'
    }
  },
  props: ['homepage'],
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
   },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleBurger: function() {
      this.burgerActive = !this.burgerActive
      return this.burgerActive
    },
    handleScroll: function(){
      if (window.scrollY > 20) {
        this.btnToTopDisplay = 'block'
      } else {
        this.btnToTopDisplay = 'none'
      }
    }
  }
}
</script>


<style>
#btnToTop {
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
  }
</style>
