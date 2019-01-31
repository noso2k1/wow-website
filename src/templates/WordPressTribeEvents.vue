<template>
  <Layout :homepage="false">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{event.title}}</h1>
          <h2 class="subtitle">{{event.startDate}}</h2>
        </div>
      </div>
    </section>

    <section class="tile is-anchestor">
      <div class="tile is-8">
        <div class="section" v-if="event.content" v-html="event.content" />
      </div>
      <div class="tile">
        <div class="section">
          <h2 class="subtitle is-spaced"><b>Where:</b> <a :href="event.venueWebsite"> {{event.venueNameAddress}}</a></h2>
          <h2 class="subtitle"><b>When:</b> {{event.startDate}} at {{event.startTime}}</h2>
        </div>
      </div>
    </section>
    <div class="section has-text-centered">
      <g-image v-if="event.featuredMedia" :src="event.featuredMedia.url" width="800" />
    </div>

  </Layout>
</template>

<page-query>
query Event ($path: String!) {
  wordPressTribeEvents (path: $path) {
    title
    content
    date
    path
    startDate
    startTime
    venueName
    venueNameAddress
    venueWebsite
    featuredMedia {
      url (width: 100 height: 100 quality:10 fit:inside)
    }
    slug
  }
}
</page-query>

<script>
export default {
  data: function() {
    return {
    }
  },
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
