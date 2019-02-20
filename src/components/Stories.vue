<template>
  <div>
    <div class="content box" v-for="story in $static.stories.edges" :key="story.node.slug">
      <div class="columns">
        <div class="column is-4">
          <g-link :to="story.node.path">
            <g-image v-if="story.node.featuredMedia" :src="story.node.featuredMedia.url" />
          </g-link>
        </div>
        <div class="column">
          <p class="heading " v-html="story.node.date" />
          <g-link :to="story.node.path"><p class="title " v-html="story.node.title" /></g-link>
          <p class="content " v-html="story.node.excerpt" />
          <g-link class="button is-info" :to="story.node.path">Read more</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stories'
}
</script>

<static-query>
query Stories {
  stories: allWordPressPost (sortBy:"date", order:DESC){
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
