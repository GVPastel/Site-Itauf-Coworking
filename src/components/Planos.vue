<template>
    <div class="banner">
        <div class="banner-overlay">
            <div class="banner-content"></div>
        </div>
    </div>
    <div class="div-pai">
        <div class="col-md-4">
            <p class="texto-principal">CONHEÇA NOSSOS PLANOS!</p>
            <h1 class="texto-t1">TABELA DE PLANOS</h1>
            <div class="tabela-precos">
                <div class="colunas">
                    <p class="texto-planos">----------------</p>
                    <p class="texto-planos">Hora</p>
                    <p class="texto-planos">Diária</p>
                    <p class="texto-planos">Semanal All-Day</p>
                    <p class="texto-planos">Mensal meio-período</p>
                    <p class="texto-planos">Mensal período integral</p>
                </div>
                <div class="colunas">
                    <p class="texto-planos"><strong>Estação</strong></p>
                    <p class="texto-planos">R$ 25,00</p>
                    <p class="texto-planos">R$ 100,00</p>
                    <p class="texto-planos">R$ 250,00</p>
                    <p class="texto-planos">R$ 750,00</p>
                    <p class="texto-planos">R$ 950,00</p>
                </div>
                <div class="colunas">
                    <p class="texto-planos"><strong>Sala Privada</strong></p>
                    <p class="texto-planos">R$ 45,00</p>
                    <p class="texto-planos">R$ 240,00</p>
                    <p class="texto-planos">-------------</p>
                    <p class="texto-planos">R$ 1.199,00</p>
                    <p class="texto-planos">R$ 1.399,00</p>
                </div>
            </div>
            <br>
            <div class="tabela-precos">
                <div class="colunas">
                    <p class="texto-planos"><strong>Sala de reuniões</strong></p>
                    <p class="texto-planos">Hora</p>
                    <p class="texto-planos">Diária</p>
                </div>
                <div class="colunas">
                    <p class="texto-planos">-------------</p>
                    <p class="texto-planos">R$ 65,00</p>
                    <p class="texto-planos">R$ 360,00</p>
                </div>
            </div>
            <br>
            <div class="tabela-precos">
                <div class="colunas">
                    <p class="texto-planos"><strong>Pacote de horas</strong></p>
                    <p class="texto-planos">36 horas</p>
                    <p class="texto-planos">65 horas</p>
                </div>
                <div class="colunas">
                    <p class="texto-planos"><strong>Estação</strong></p>
                    <p class="texto-planos">R$ 360,00</p>
                    <p class="texto-planos">R$ 550,00</p>
                </div>
                <div class="colunas">
                    <p class="texto-planos"><strong>Sala privativa</strong></p>
                    <p class="texto-planos">R$ 600,00</p>
                    <p class="texto-planos">R$ 900,00</p>
                </div>
            </div>
        </div>
        <br>
        <div class="reserva">
            <a href="https://api.whatsapp.com/send/?phone=5548991029881&text=Ol%C3%A1%21+Quero+fazer+uma+reserva+na+iTAUF+Coworking%21&type=phone_number&app_absent=0"
                target="_blank" class="btn btn-primary mr-2 paginas">FAÇA SUA RESERVA!</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Planos',
};
</script>

<style scooped>
.imagens-plano {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 10px;
    padding-top: 10px;
}


.btn-primary {
    background-color: rgba(48, 48, 51, 1);
    border-color: rgba(225, 223, 219, 1);
    color: rgba(225, 223, 219, 1);
    --bs-btn-color: #fff;
    --bs-btn-bg: #000;
    --bs-btn-border-color: #000;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: rgba(48, 48, 51, 1);
    --bs-btn-hover-border-color: #000;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #000;
    --bs-btn-active-border-color: #0a53be;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #000;
    --bs-btn-disabled-border-color: #000;
}

.texto-p {
    text-align: center;
    color: #000;
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

.texto-t1 {
    font-size: 50px;
    color: #000;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
}


.texto-principal {
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
}

.tabela-precos {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 3px solid grey;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
}

.reserva {
    padding-bottom: 20px;
}

.colunas {
    display: flex;
    flex-direction: column;
}

.banner {
    position: relative;
    height: 400px;
    /* ou qualquer altura desejada */
    background: url('../assets/img/banner.png') center/cover;
    /* Substitua pelo caminho da sua imagem */
    color: #fff;
    text-align: center;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Fundo escuro semi-transparente */
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-content {
    max-width: 600px;
    /* ou a largura desejada */
}

.banner-content h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.banner-content p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.texto-planos {
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

.paginas {
    width: 500px;
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

@media screen and (max-width:500px) {
    .texto-t1 {
        text-align: center;
        font-size: 40px;
        padding-bottom: 10px;
    }

    .paginas {
        width: 300px;
    }
}
</style>