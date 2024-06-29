<template>
  <div>
    <NavBar />
    <BannerSite />

    <div class="container column is-10">
      <Nuxt />
    </div>

    <FooterSite />
  </div>
</template>

<script>
import BannerSite from '~/components/BannerSite.vue'
import NavBar from '~/components/NavBar.vue'
import FooterSite from '~/components/FooterSite.vue'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    BannerSite,
    FooterSite
  }
}
</script>
