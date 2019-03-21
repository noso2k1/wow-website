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
      <g-image v-if="$page.wordPressPost.featuredMedia" :src="$page.wordPressPost.featuredMedia.sourceUrl" width="800" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    title
    content
    excerpt
    featuredMedia {
      sourceUrl
    }
    id
    title
    slug
    date
  }
}
</page-query>

<script>
export default {
  metaInfo () { return {
    title: this.$page.wordPressPost.title,
    script: [{     
      key: 'owaTrackerCode',
      innerHTML: `//<![CDATA[
        var owa_baseUrl = 'https://wombats.ch/owa/';
        var owa_cmds = owa_cmds || [];
        owa_cmds.push(['setSiteId', '` + process.env.GRIDSOME_OWA_SITE_ID + `']);
        owa_cmds.push(['setPageType','post'])
        owa_cmds.push(['trackPageView']);
        owa_cmds.push(['trackClicks']);
        //]]>`,
      type:"text/javascript" 
    }],
    meta: [{
      key: 'description',
      name: 'description',
      content: this.$page.wordPressPost.excerpt
    }]    
  }}
}
</script>
