<template>
  <Layout :homepage="false">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" v-html="event.title" />
          <h2 class="subtitle">{{event.date}}</h2>

          <section class="tile is-anchestor">
            <div class="tile is-8">
              <div>
                <div v-if="event.content" v-html="event.content" class="content" />
                <span class="has-text-centered"><a v-if="event.eventCost" :href="event.eventUrl" class="button is-primary">Buy tickets here</a></span>
              </div>
            </div>
            <div class="tile">
              <div class="box">
                <h2 class="subtitle is-spaced"><b>Where:</b> <a :href="event.venueWebsite"> {{event.venueName}}</a><span v-html="event.venueFullAddress" /></h2>
                <h2 class="subtitle"><b>When:</b> {{event.date}} at {{event.startTime}}</h2>
                <h2 class="subtitle" v-if="event.eventCost"><b>Tickets:</b> {{event.eventCost}} {{event.eventCurrencySymbol}}</h2>
                <span><a v-if="event.eventCost" :href="event.eventUrl" class="button is-primary">Buy tickets here</a></span>
              </div>
            </div>
          </section>
          <div class="section has-text-centered">
            <g-image v-if="event.featuredMedia" :src="event.featuredMedia.sourceUrl" width="800" />
          </div>

        </div>
      </div>
    </section>

  </Layout>
</template>

<page-query>
query Event ($path: String!) {
  wordPressTribeEvents (path: $path) {
    title
    content
    excerpt
    date (format: "D MMMM YYYY")
    path
    startDate
    startTime
    venueName
    venueNameAddress
    venueWebsite
    venueFullAddress
    featuredMedia {
      sourceUrl
    }
    slug
    eventCurrencySymbol
    eventCost
    eventUrl
  }
}
</page-query>

<script>
export default {
  data() { return {} },
  metaInfo() {
    return {
      title: this.$page.wordPressTribeEvents.title,
      script: [{     
        key: 'owaTrackerCode',
        innerHTML: `//<![CDATA[
          var owa_baseUrl = 'https://wombats.ch/owa/';
          var owa_cmds = owa_cmds || [];
          owa_cmds.push(['setSiteId', '` + process.env.GRIDSOME_OWA_SITE_ID + `']);
          owa_cmds.push(['setPageType','event'])
          owa_cmds.push(['trackPageView']);
          owa_cmds.push(['trackClicks']);
          //]]>`,
        type:"text/javascript" 
      }],
      meta: [{
        key: 'description',
        name: 'description',
        content: this.$page.wordPressTribeEvents.excerpt
      }]
  }},
  computed: {
    event: function() {
      let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let event = this.$page.wordPressTribeEvents
      let eventDate = new Date(event.startDate)
      let day = eventDate.getDate()
      let monthIndex = eventDate.getMonth()
      let year = eventDate.getFullYear()
      event.startDate = eventDate.getDate() + ' ' + monthNames[eventDate.getMonth()] + ' ' + eventDate.getFullYear()
      event.startTime = event.startTime.substring(0,5)
      return event
    }
  } 
}
</script>
