<template>
  <div>
    <div class="content highlight" v-for="(event,index) in events" :key="event.node.slug">
      <g-link class="level box has-ribbon" :to="event.node.path">
        <div v-if="index==0" class="ribbon is-info">Coming soon!</div>
        <div class="level-left">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">{{monthNames[new Date(event.node.startDate).getMonth()]}}</p>
              <p class="title">{{new Date(event.node.startDate).getDate()}}</p>
            </div>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-4">{{event.node.title}}</p>
            <p class="subtitle is-size-6">{{event.node.venueName}}</p>
          </div>
        </div>
      </g-link>
    </div>

  <!--<g-link class="has-ribbon media box highlight" v-for="(event,index) in events" :key="event.node.slug" :to="event.node.path">

      <div v-if="index==0" class="ribbon is-info">Coming soon!</div>
    <div class="media-left">
      <div>
              <p class="heading">{{monthNames[new Date(event.node.startDate).getMonth()]}}</p>
              <p class="title">{{new Date(event.node.startDate).getDate()}}</p>
      </div>
    </div>
    <div class="media-content">
      <div class="content has-text-centered">
          <div>
            <p class="title is-size-4">{{event.node.title}}</p>
            <p class="subtitle is-size-6">{{event.node.venueName}}</p>
          </div> 
      </div>
    </div>

  </g-link> -->





  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data: function() {
    return {
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  },
  computed: {
    events: function() {
      let events = this.$static.events.edges
      events.sort(function(a,b){
        if(a.node.startDate < b.node.startDate) { return -1 }
        if(a.node.startDate > b.node.startDate) { return 1 }
        return 0
      });
      return events
    }
  }
}
</script>

<static-query>
query Events {
  events: allWordPressTribeEvents (sortBy:"date", order: ASC ) {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
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

</style>
