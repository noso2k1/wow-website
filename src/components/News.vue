<template>
  <div>
    <div class="content highlight" v-for="info in $static.news.edges" :key="info.node.slug">
      <g-link class="level box has-ribbon" :to="info.node.path">
        <div class="level-left">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">{{info.node.date}}</p>
            </div>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-4" v-html="info.node.title" />
            <div class="content" v-html="info.node.excerpt" />
          </div>
        </div>
      </g-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'News',
  data: function() {
    return {
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  }
}
</script>

<static-query>
query News {
  news: allWordPressPost (sortBy:"date", order:DESC){
    edges{
      node{
        title
        id
        slug
        featuredMedia{
          url
        }
        path
        date (format: "ddd D MMMM YYYY")
        excerpt
      }
    }
  }
}

</static-query>

<style>

</style>
