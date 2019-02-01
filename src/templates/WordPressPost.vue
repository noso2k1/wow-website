<template>
  <Layout :homepage="false">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" v-html="$page.wordPressPost.title" />
        </div>
      </div>
    </section>

    <div class="section">
      <div class="content" v-html="$page.wordPressPost.content"/>
    </div>

    <div class="section has-text-centered">
      <g-image v-if="$page.wordPressPost.featuredMedia" :src="$page.wordPressPost.featuredMedia.url" width="800" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    content
    featuredMedia {
      url
    }
    id
    title
    slug
    date
  }
}
</page-query>

<script>
export default {}
</script>
