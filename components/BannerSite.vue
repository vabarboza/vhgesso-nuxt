<template>
    <div>
        <section class="hero is-small hero-background">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img class="title has-text-white responsive-image animate__animated animate__pulse" src="~/assets/images/logo.png" />
                    <p class="subtitle has-text-dark is-5 has-text-weight-semibold mt-3">Forros - Molduras - Gesso
                        Acartonado</p>
                    <p class="subtitle has-text-dark is-5 has-text-weight-semibold margin-top">Divisorias - Sancas -
                        Colunas - Arte em Gesso</p>
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

.responsive-image {
    height: 10vw;
    /* Ajuste o valor conforme necessário */
}

@media (max-width: 768px) {

    /* Para dispositivos móveis */
    .responsive-image {
        height: 20vw;
        /* Ajuste o valor conforme necessário */
    }
}

.subtitle {
    font-size: 2vw;
    /* Ajuste o valor conforme necessário */
}

@media (max-width: 768px) {

    /* Para dispositivos móveis */
    .subtitle {
        font-size: 3vw !important;
        /* Ajuste o valor conforme necessário */
    }
}

.margin-top {
    margin-top: -25px;
}
</style>