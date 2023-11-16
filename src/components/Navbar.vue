<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/Logo.png" alt="Logo" height="60">
                    <h2 class="texto-logo">iTAUF Coworking</h2>
                </a>
            </router-link>



            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2 pesquisa" type="search" placeholder="Pesquisar" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0 pesquisa" type="submit">Pesquisar</button>
            </form>


            <!-- <div class="dropdown ml-auto">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Item 1</a>
                    <a class="dropdown-item" href="#">Item 2</a>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
.navbar-brand {
    flex-direction: row;
    display: flex;
    align-items: center;
}

.navbar-brand img {
    width: 120px;
}

.navbar-brand,
.navbar-nav .nav-link {
    color: #ffffff !important;
}

.mr-sm-2 {
    width: 400px;
    align-items: center;
}

.form-inline {
    display: flex;
}

.form-control {
    margin-right: 0.5rem;
}

.pesquisa {
    font-family: 'NotoSans-Regular', sans-serif;
    font-weight: 400;
}

.texto-logo {
    color: #000000;
    font-size: 20px;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
}

.btn-outline-success {
    color: #000;
    border-color: #000;
}

.dropdown-toggle {
    color: #ffffff;
}

.dropdown-item {
    color: #000000;
}

.dropdown-item:hover {
    background-color: rgba(48, 48, 51, 1);
    color: #ffffff;
}
</style>