<template>
  <Layout :homepage="true">
    
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
            <a class="column home-link-item" :href="nextShow.link">
             <div class="section">
                <h1 class="title">Next show</h1>
                <h2 class="subtitle">{{nextShow.startDate}} @ {{nextShow.venueName}}</h2>
              </div>
            </a>
            <a class="column home-link-item" href="#" v-scroll-to="'#calendar'">
              <div class="section">
                <h1 class="title">All shows</h1>
                <h2 class="subtitle">Check all our shows out</h2>
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
          <div class="level"><div class="level-item"><a class="button is-info" href="#" v-scroll-to="'#contact'">Get in touch</a></div></div>
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
              <Calendar />
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

      <!-- News section -->
      <section class="section hero" id="news">
        <div class="hero-head">
          <div class="container">
            <h1 class="title">News</h1>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <News />
          </div>
        </div>
      </section>

      <!-- Contacts section -->
      <section class="section hero is-light" id="contact">
        <div class="hero-head">
          <div class="container">
            <h1 class="title">Contacts</h1>
            <h2 class="subtitle">Let's keep in touch!</h2>
          </div>
        </div>

        <div class="hero-body">
          <div class="container">
            <p>Contact us via <a href="mailto:wisdom@wombats.ch">email</a> or on Facebook <a href="http://facebook.com/wombatsimprov">@WombatsImprov</a></p>
            <div class="section">
            <NewsletterSubscribe />
            </div>
          </div>
        </div>
      </section>

  </Layout>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import News from '~/components/News.vue'
import NewsletterSubscribe from '~/components/NewsletterSubscribe.vue'
export default {
  name: "Home",
  components: {
    Calendar,
    News,
    NewsletterSubscribe
  },
  data: function () {
    return {}
  },
  computed: {
    nextShow: function() {
      let nextShowTmp = {}
      let events = []
      let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      events = this.$static.events.edges
      events.sort(function(a,b){
        if(a.node.startDate < b.node.startDate) { return -1 }
        if(a.node.startDate > b.node.startDate) { return 1 }
        return 0
      });
      let eventDate = new Date(events[0].node.startDate)
      let day = eventDate.getDate()
      let monthIndex = eventDate.getMonth()
      let year = eventDate.getFullYear()
      let startDateTxt = day + ' ' + monthNames[monthIndex] + ' ' + year
      nextShowTmp.startDate = startDateTxt
      nextShowTmp.link = events[0].node.path
      nextShowTmp.venueName = events[0].node.venueName
      return nextShowTmp
    }
  }
}
</script>

<static-query>
query Events {
  events: allWordPressTribeEvents (sortBy:"date", order:ASC, perPage:1, page:1) {
    edges {
      node {
        title
        date
        venueName
        startDate
        startTime
        path
        featuredMedia {
          url
        }
        slug
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
