<template>
  <Layout :homepage="false">
      <section class="section">
        <h1 class="title">This page is not here</h1>
        <p>This page doesn't exist. You can go the <g-link :to="{name:'home'}">Home</g-link></p>
      </section>
  </Layout>

</template>

<script>
export default {
    name: "404"
}
</script>
