<template>
    <div>
        <footer>
            <div class="footer-columns">
                <div>
                    <h4>VH GESSO</h4>
                    <ul>
                        <li>Forros - Molduras - Gesso Acartonado - Divisórias - Sancas - Colunas - Gesso Decorado.</li>
                    </ul>
                </div>
                <div>
                    <h2>PRODUTOS</h2>
                    <ul>
                        <li><a href="#">Forro Liso</a></li>
                        <li><a href="#">Molduras</a></li>
                        <li><a href="#">Gesso Acartonado</a></li>
                    </ul>
                </div>
                <div>
                    <h2>PRODUTOS</h2>
                    <ul>
                        <li><a href="#">Sancas</a></li>
                        <li><a href="#">Colunas Decorativas</a></li>
                        <li><a href="#">Gesso Decorado</a></li>
                    </ul>
                </div>
                <div>
                    <h2>CONTATOS</h2>
                    <ul>
                        <li><a href="mailto:contato@vhgesso.com.br"><span class="icon"><i
                                        class="fas fa-envelope"></i></span> contato@vhgesso.com.br</a></li>
                        <li><a href="tel:+5544998210967"><span class="icon"><i class="fas fa-phone"></i></span> (44)
                                99821-0967</a></li>
                        <li><a href="tel:+5544998210967"><span class="icon"><i class="fas fa-phone"></i></span> (44)
                                99821-0967</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2020 Copyright: vhgesso.com.br</p>
                <div class="footer-icons">
                    <a href="#"><span class="icon"><i class="fab fa-instagram"></i></span></a>
                    <a href="#"><span class="icon"><i class="fab fa-facebook"></i></span></a>
                    <a href="#"><span class="icon"><i class="fab fa-whatsapp"></i></span></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>
footer {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 1.5rem;
}

.footer-columns {
    display: flex;
    justify-content: space-between;
}

.footer-columns div {
    flex: 1;
    margin: 0 1rem;
}

.footer-columns h2 {
    font-weight: bold;
    margin-bottom: 1rem;
}

.footer-columns ul {
    list-style: none;
    padding: 0;
}

.footer-columns ul li {
    margin-bottom: 0.5rem;
}

.footer-columns ul li a {
    color: white;
    text-decoration: none;
}

.footer-columns ul li a:hover {
    text-decoration: underline;
}

.footer-bottom {
    text-align: center;
    margin-top: 2rem;
}

.footer-icons a {
    margin: 0 0.5rem;
    color: white;
}
</style>