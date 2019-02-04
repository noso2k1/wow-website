<template>
  <div>
    <div class="content box" v-for="info in $static.news.edges" :key="info.node.slug">
      <div class="columns">
        <div class="column is-4">
          <g-link :to="info.node.path">
            <g-image v-if="info.node.featuredMedia" :src="info.node.featuredMedia.url" />
          </g-link>
        </div>
        <div class="column">
          <p class="heading " v-html="info.node.date" />
          <g-link :to="info.node.path"><p class="title " v-html="info.node.title" /></g-link>
          <p class="content " v-html="info.node.excerpt" />
          <g-link class="button is-info" :to="info.node.path">Read mode</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News'
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
        date (format: "MMMM, D YYYY")
        excerpt
      }
    }
  }
}

</static-query>

<style>

</style>
