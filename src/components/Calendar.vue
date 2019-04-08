<template>
  <div>
    <div class="content highlight" v-for="event in events" :key="event.node.slug">
      <g-link class="level box" :to="event.node.path">
        <div class="level-left">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">{{monthNames[new Date(event.node.date).getMonth()]}}</p>
              <p class="title">{{new Date(event.node.date).getDate()}}</p>
            </div>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-4" v-html="event.node.title" />
            <p class="subtitle is-size-6">{{event.node.venueName}}</p>
          </div>
        </div>
      </g-link>
    </div>
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
        slug
      }
    }
  }
}

</static-query>

<style>

</style>
