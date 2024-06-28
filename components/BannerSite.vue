<template>
    <div>
        <section class="hero is-small hero-background">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img class="title has-text-white" style="height: 200px" src="~/assets/images/logo.png" />
                    <p class="subtitle has-text-dark is-5 mt-3">Forros - Molduras - Gesso Acartonado</p>
                    <p class="subtitle has-text-dark is-5 margin-top">Divisorias - Sancas - Colunas - Arte em Gesso</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BannerSite'
}
</script>

<style>
.hero-background {
    background-image: url('~/assets/images/bannerMeio.png');
    background-size: cover;
    background-position: center;
}

.margin-top {
    margin-top: -30px;
}
</style>