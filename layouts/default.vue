<template>
  <div>
    <NavBar />
    <BannerSite />


    <Nuxt />


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
