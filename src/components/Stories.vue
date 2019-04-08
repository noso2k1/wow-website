<template>
  <div>
    <div class="content box" v-for="story in $static.stories.edges" :key="story.node.slug">
      <div class="columns">
        <div class="column is-4">
          <g-link :to="story.node.path">
            <g-image v-if="story.node.featuredMedia" :src="story.node.featuredMedia.sourceUrl" />
          </g-link>
        </div>
        <div class="column">
          <p class="heading " v-html="story.node.date" />
          <g-link :to="story.node.path"><p class="title " v-html="story.node.title" /></g-link>
          <p class="content " v-html="story.node.excerpt" />
          <g-link class="button is-info" :to="story.node.path">Read the full story here</g-link>
        </div>
      </div>
    </div>
    <g-link v-if="$static.stories.pageInfo.totalPages > 1" to="/stories" class="button">All stories</g-link>
  </div>
</template>

<script>
export default {
  name: 'Stories'
}
</script>

<static-query>
query Stories {
  stories: allWordPressPost (sortBy:"date", order:DESC, perPage:3) {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        title
        id
        slug
        featuredMedia{
          sourceUrl
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
