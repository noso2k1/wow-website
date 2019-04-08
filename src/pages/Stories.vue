<template>
  <Layout class="section">
    <h1 class="title">Our stories</h1>
    <div class="content box" v-for="story in $page.stories.edges" :key="story.node.slug">
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
    <Pager :info="$page.stories.pageInfo" :ariaLabel="'pagination'" 
        :linkClass="'button is-rounded'" :showNavigation="false"
        :prevLabel="'Previous page'" :nextLabel="'Next page'" class="content" />
  </Layout>
</template>

<script>

</script>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'Stories',
  components: {
    Pager
  }
}
</script>

<page-query>
query Stories ($page: Int) {
  stories: allWordPressPost (sortBy:"date", order:DESC, perPage:15 page: $page) @paginate {
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

</page-query>

<style>


</style>


