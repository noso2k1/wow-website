<template>
  <Layout :homepage="true">
    
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


      <section class="section" id="about">
          <div class="container">
            <h1 class="title">Who we are - OUR VISION</h1>
            <h2 class="subtitle">What kind of show we do - Why we do what we do - We push our boundaries - Experiment - Get out of our comfort zone</h2>
            <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in leo quis neque venenatis fermentum vitae eget justo. 
                Etiam lacinia a nibh ut mattis. Fusce eget maximus magna. Proin aliquet lectus sed magna rutrum, sed ornare risus ultrices. 
                Nulla condimentum, lectus sed hendrerit scelerisque, tellus quam volutpat risus, ac sagittis felis turpis id nulla. Ut non neque eros. 
                Pellentesque dignissim tristique elit id molestie.</p>
            <p>What kind of shows we do.</p>
            <p class="title">Get involved</p>
            <p>I have a venue and I want you to play here</p>
            <p>I am a musician and I want to play with you</p>
            <p>I do other art forms and I want to collaborate with you</p>
          </div>
        </div> 
      </section>


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

      <section class="section hero" id="news">
        <div class="hero-head">
          <h1 class="title">News</h1>
        </div>
        <div class="hero-body">
          <News />
        </div>
      </section>
    
      <section class="hero">
        <figure class="image">
          <g-image src="../assets/improv-draft-16.jpg" />
        </figure>
      </section>


      <section class="section hero is-light" id="contact">
        <div class="hero-head">
          <h1 class="title">Contacts</h1>
          <h2 class="subtitle">Let's keep in touch!</h2>
        </div>
        
        <div class="hero-body">
          Contact us via <a href="mailto:wisdom@wombats.ch">email</a> or on Facebook <a href="http://facebook.com/wombatsimprov">@WombatsImprov</a>
        </div>
      </section>

  </Layout>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import News from '~/components/News.vue'
export default {
  name: "Home",
  components: {
    Calendar,
    News
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
