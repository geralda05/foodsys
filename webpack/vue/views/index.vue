<style>

/* ESTILOS BASICOS */
.j-center{
    justify-content:center;
    align-items:center;
    text-align:center;
}
.minh-100vh{
    min-height:100vh;
}
.bg-opacity{
    background-color:rgba(1,1,1,.5);
}
.bg-opacity-white{
    background-color:rgba(255,255,255,.9);
}
.parallax{
    background-size:cover;
    background-attachment: fixed;
    background-position:center;
    background-repeat:no-repeat;
}
.parallax-auto{
    background-size:auto;
    background-attachment: fixed;
    background-position:center;
    background-repeat:repeat;
}
.overflow-hidden-cont{
    overflow:hidden;
}
</style>
<template>
    <body class="p-0">
        <router-view></router-view>
    </body>
</template>
<script>
    import WOW from 'wow.js';
    export default{
        name:'index',
        components:{
            
        },
        mounted(){
            new WOW().init();
        }
    }
</script>
