<template>
    <div class="banner">
        <div class="banner-overlay">
            <div class="banner-content"></div>
        </div>
    </div>
    <div class="div-pai">
        <div class="texto1">
            <h1 class="titulo-evento">SEU EVENTO/WORKSHOP NA ITAUF!</h1>
        </div>
        <div class="imagens-evento">
            <div class="col-md-4">
                <p class="texto-t">ALUGUEL PRIVADO <br>DO COWORKING</p>
                <br>
                <p class="texto-p">Tambem é possivel alugar o espaço para contraternizações, eventos, workshops, happy hour,
                    etc.</p>
                <p class="texto-p">O aluguel do coworking inclui uso total do espaço, exceto a sala do administrativo. Com
                    espaço para até
                    16 pessoas sentadas.</p>
                <br>
                <p class="texto-t">PACOTE COM <br> COMIDA INCLUSA</p>
                <p class="texto-p">Salgados e doces inclusos se você preferir!</p>
                <!-- <img src="../assets/img/eventos.png" alt="Imagem 1" class="img-fluid mb-2"> -->
            </div>
            <div class="col-md-4">
                <img src="../assets/img/comida.png" alt="Imagem 2" class="img-fluid mb-2">
            </div>
        </div>
        <div class="reserva">
            <a href="https://api.whatsapp.com/send/?phone=5548991029881&text=Ol%C3%A1%21+Quero+fazer+uma+reserva+na+iTAUF+Coworking%21&type=phone_number&app_absent=0"
                target="_blank" class="btn btn-primary mr-2 paginas">FAÇA SEU ORGAÇEMENTO!</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Eventos',
};
</script>

<style scooped>
.div-pai {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.imagens-evento {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-evenly;
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
    font-size: 17px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

.texto-t {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    font-family: 'NotoSans-Medium', sans-serif;
    font-weight: 600;
}

.titulo-evento {
    font-weight: 500;
    padding-bottom: 30px;
    padding-top: 30px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
}

.reserva {
    padding-bottom: 20px;
    padding-top: 20px;
}

.banner {
    position: relative;
    height: 400px;
    background: url('../assets/img/banner.png') center/cover;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-content {
    max-width: 600px;
}

.banner-content h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.banner-content p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.paginas {
    width: 500px;
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

@media screen and (max-width:500px) {
    .imagens-evento {
        display: flex;
        flex-direction: column !important;
    }

    .paginas {
        width: 300px;
    }
}
</style>