<template>
  <div>
    <NavBar />
    <BannerSite />

    <div class="container column is-10">
      <Nuxt />
    </div>

  </div>
</template>

<script>
import BannerSite from '~/components/BannerSite.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    BannerSite
  }
}
</script>
