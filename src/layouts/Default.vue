<template>
  <div class="layout">
    <a class="button is-text has-text-primary" id="btnToTop" href="#" v-scroll-to="'#top'" v-bind:style="{display: btnToTopDisplay}">
      <span class="icon">
        <font-awesome :icon="['fas','chevron-circle-up']" :size="'lg'" />
      </span><span>Back to top</span>
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
          <a class="navbar-item" href="https://www.facebook.com/wombatsimprov" target="_blank"><span class="icon"><font-awesome :icon="['fab','facebook-f']" /></span></a>
          <a class="navbar-item" href="https://www.instagram.com/wombatsimprov/" target="_blank"><span class="icon"><font-awesome :icon="['fab','instagram']" /></span></a>
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
          <a class="navbar-item" href="https://www.facebook.com/wombatsimprov" target="_blank"><span class="icon"><font-awesome :icon="['fab','facebook-f']" /></span></a>
          <a class="navbar-item" href="https://www.instagram.com/wombatsimprov/" target="_blank"><span class="icon"><font-awesome :icon="['fab','instagram']" /></span></a>
          <a class="navbar-item" href="mailto:wisdom@wombats.ch"><span class="icon"><font-awesome :icon="['fas','envelope']" /></span></a>
        </div>
      </div>
    </header>

    <!-- This is where we add the page content -->
    <slot/>

    <footer class="footer">
      <div class="level content has-text-centered">
        <div class="level-item has-text-white">
          <p> © 2019 Wisdom of Wombats – All rights reserved.</p>
        </div>
        <div class="level-item">
          <a class="icon has-text-white" href="https://www.facebook.com/wombatsimprov" target="_blank"><font-awesome :icon="['fab','facebook-f']" /></a>
          <a class="icon has-text-white" href="https://www.instagram.com/wombatsimprov/" target="_blank"><font-awesome :icon="['fab','instagram']" /></a>
          <a class="icon has-text-white" href="mailto:wisdom@wombats.ch"><font-awesome :icon="['fas','envelope']" /></a>
          <a class="icon has-text-white" href="https://www.meetup.com/Pop-up-Performances/" target="_blank"><font-awesome :icon="['fab','meetup']" /></a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import NewsletterSubscribePopup from '~/components/NewsletterSubscribePopup.vue'
export default {
  components: {
    NewsletterSubscribePopup
  },
  data: function() {
    return {
      burgerActive: false,
      btnToTopDisplay: 'none',
      nlSlideUpDisplay: 'block'
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

#nlPopup {
  position: fixed;
  width: 30%;
  left: 20px;
  bottom: -100%;
  z-index: 99;
  -webkit-animation-name: nlSlideUp; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-play-state: running;
  -webkit-animation-delay: 0s;
  animation-name: nlSlideUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-delay: 0s;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes nlSlideUp {
  from {bottom: -100%;}
  to {bottom: 0%;}
}

/* Standard syntax */
@keyframes nlSlideUp {
  from {bottom: -100%;}
  to {bottom: 0%;}
}

.closebtn {
  position: absolute;
  top: 5px;
  right: 15px;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.closebtn:hover {
  color: lightgrey;
}
</style>
