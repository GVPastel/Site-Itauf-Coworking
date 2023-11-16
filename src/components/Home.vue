<template>
    <div class="banner">
        <div class="banner-overlay">
            <div class="banner-content"></div>
        </div>
    </div>
    <div class="container mt-4">
        <div class="row">
            <p class="texto-home">Venha para a iTAUF! Seu coworking no centro de Imbituba-SC com vista para o mar!</p>
            <div class="router-link-div">
                <div>
                    <router-link to="/planos" class="btn btn-primary mr-2 home-b">Planos</router-link>
                </div>
                <div>
                    <router-link to="/eventos" class="btn btn-primary mr-2 home-b">Eventos</router-link>
                </div>

                <div>
                    <a href="https://api.whatsapp.com/send/?phone=5548991029881&text=Ol%C3%A1%21+Quero+fazer+uma+reserva+na+iTAUF+Coworking%21&type=phone_number&app_absent=0"
                        target="_blank" class="btn btn-primary mr-2 home-b">Whatsapp</a>
                </div>
            </div>

            <div class="col-md-4">
                <img src="../assets/img/sala-individual.png" alt="Imagem 1" class="img-fluid mb-2">
                <h2 class="texto-t"><strong>Estações de trabalho individuais</strong></h2>
                <p class="texto-p">As mesas são equipadas com gaveteiro com chave para que você possa guardar seus
                    pertences, torre de
                    tomadas para facilitar na rotina com os equipamentos, divisoria com vidro para sua privacidade e cadeira
                    giratória para proporcionar mais praticidade e conforto!</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/copa.png" alt="Imagem 2" class="img-fluid mb-2">
                <h2 class="texto-t"><strong>Copa equipada</strong></h2>
                <p class="texto-p">Você coworker tem acesso a nossa copa, muito bem equipada e um charme! Frigobar, pia,
                    louças, maquina de
                    café, tudo liberado para você!</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/sala-reunioes.png" alt="Imagem 3" class="img-fluid mb-2">
                <h2 class="texto-t"><strong>Sala de reuniões</strong></h2>
                <p class="texto-p">Nossa sala de reuniões comporta 6 pessoas sentadas, é equipada com 1 TV Smart, mesa, 6
                    cadeiras
                    giratórias e uma vista para o mar de tirar o fôlego. A sala é climatizada, muito bem iluminada e com
                    isolamento acústico dos demais ambientes, proporcionando mais privacidade durante o uso.</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/sala-ambiente.png" alt="Imagem 3" class="img-fluid mb-2">
                <h2 class="texto-t"><strong>Ambiente climatizado</strong></h2>
                <p class="texto-p">A iTAUF é 100% climatizada, então fique tranquilo em garantir a melhor experiênco
                    possível para você e
                    seus clientes!</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/sala-planos.png" alt="Imagem 3" class="img-fluid mb-2">
                <h2 class="texto-t"><strong>Planos Flexiveis</strong></h2>
                <p class="texto-p">Planos mensais, semestrais e modalidades diária e horistas também estão disponiveis na
                    iTAUF!</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/sala-conforto.png" alt="Imagem 3" class="img-fluid mb-2">
                <h2 class="texto-t"><strong>Conforto e aconchego</strong></h2>
                <p class="texto-p">Ambiente idealizado para aumentar a produtividade e criatividade na sua rotina de
                    trabalho!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            imageUrl: '../assets/img/banner.png', // substitua pelo caminho da sua imagem
        };
    },

};
</script>


<style scoped>
.router-link-div {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    height: 60px;
}

.texto-home {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
}

.texto-p {
    text-align: center;
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

.texto-t {
    text-align: center;
    font-size: 25px;
    font-family: 'NotoSans-Medium', sans-serif;
    font-weight: 500;
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

.col-md-4 {
    padding: 10px;
}

.btn-primary {
    background-color: rgba(48, 48, 51, 1);
    border-color: rgba(225, 223, 219, 1);
    color: rgba(225, 223, 219, 1);
}

.home-b {
    width: 300px;
    font-family: 'NotoSans-Medium', sans-serif;
    font-weight: 400;
}

.btn-primary {
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

@media screen and (max-width: 500px) {
    .home-b {
        width: auto;
    }
}
</style>