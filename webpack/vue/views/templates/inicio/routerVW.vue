<template>
    <div>
        <router-view>
        </router-view>
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark" style="background-color:rgb(0,51,101); box-shadow:10px 10px 10px 10px">
            <router-link tag="a" to="/dashboard" class="navbar-brand">SELLSELF  <i class="fas fa-university"></i></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                <li class="nav-item active d-flex j-center">
                    <router-link tag="a" to="/dashboard" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item d-flex j-center">
                    <router-link tag="a" to="/dashboard/pedidos" class="nav-link">Pedidos</router-link>
                </li>
                <li class="nav-item dropdown ml-auto">
                    <p class="nav-link dropdown-toggle mb-0 d-flex j-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hola, Administrador <i class="fas fa-user-circle fs-2 ml-2"></i>
                    </p>
                    <div class="dropdown-menu dropdown-menu-top dropdown-menu-right" style="bottom:50px; top:auto;" aria-labelledby="navbarDropdown">
                        <router-link tag="a" to="/inicio" class="dropdown-item">Cerrar Sesión</router-link>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Nombre del Administrador</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    </div>    
</template>
