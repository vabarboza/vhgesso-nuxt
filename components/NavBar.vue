<template>
    <nav class="navbar container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img class="animate__animated animate__pulse" src="~/assets/images/logo.png" />
            </a>

            <a role="button" class="navbar-burger" data-target="navbarBasicExample" aria-label="menu"
                aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Inicio
                </a>

                <a class="navbar-item">
                    A Empresa
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Produtos
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Forro Liso
                        </a>
                        <a class="navbar-item">
                            Molduras
                        </a>
                        <a class="navbar-item">
                            Gesso Acartonado
                        </a>
                        <a class="navbar-item">
                            Sancas
                        </a>
                        <a class="navbar-item">
                            Colunas Decorativas
                        </a>
                        <a class="navbar-item">
                            Gesso Decorado
                        </a>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Parceria
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Parceiros Especiais
                        </a>
                        <a class="navbar-item">
                            Parceiros
                        </a>
                        <a class="navbar-item">
                            Quero ser um parceiro
                        </a>
                    </div>
                </div>

                <a class="navbar-item" href="/sobre">
                    Contato
                </a>

            </div>

            <div class="navbar-end">
                <a href="" class="navbar-item">
                    <span class="icon">
                        <i class="fab fa-instagram fa-lg"></i>
                    </span>
                </a>
                <a href="" class="navbar-item">
                    <span class="icon">
                        <i class="fab fa-whatsapp fa-lg"></i>
                    </span>
                </a>
                <a href="" class="navbar-item">
                    <span class="icon">
                        <i class="fab fa-facebook-square fa-lg"></i>
                    </span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    mounted() {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
}
</script>

<style>
/* Insira seu CSS aqui */
</style>
