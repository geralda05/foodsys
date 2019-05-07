<style>

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
