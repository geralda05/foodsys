<template>
    <div class="container-fluid p-0">
        <div class="w-100 parallax-auto minh-100vh d-flex" style="background-image:url('/images/bg-ecommerce.png')">
            <div class="w-100 bg-opacity d-flex j-center">
                <div class="w-100 overflow-hidden-cont">
                    <h1 class="text-center font-weight w-100 text-white mb-0 title-page animated slideInDown">SellSelf</h1>
                    <div class="bg-light w-100 text-white my-2 div-page animated slideInRight delay-1s">.</div>
                    <p class="mb-0 w-100 text-white slogan-page animated slideInUp delay-2s">COMPRA LO QUE TANTO ANHELAS</p>
                    <div class="row m-0 p-0 w-100" style="position:absolute; bottom:5px; top:auto;">
                        <div class="col-12 col-sm-6">
                            <a href="#buyItems"><p class="mb-0 text-white text-left p-3"><i class="fas fa-chevron-down mr-3"></i>SWIPE TO BUY</p></a>
                        </div>
                        <div class="col-12 col-sm-6 p-3">
                            <router-link tag="p" to="/dashboard" class="mb-0 text-white text-right p-3">PANEL ADMINISTRATIVO<i class="fas fa-chevron-right ml-3"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-100 parallax-auto d-flex" style="background-image:url('https://static.brainvire.com/wp-content/uploads/2017/08/ecommerce-img3-300x300.jpg')">
            <div class="w-100 bg-opacity-white d-flex j-center p-3">
                <div class="w-100 overflow-hidden-cont" style="max-width:1100px;">
                    <h1 class="text-center font-weight w-100 p-3 wow slideInDown">CONOCE NUESTROS PRODUCTOS</h1>
                    <div class="row m-0 p-3">
                        <div class="col-12 col-sm-6 col-md-4 m-0 p-0 d-flex bg-normal wow slideInLeft delay-1s" style="background-image:url('/images/clothes.jpg');">
                            <div class="bg-opacity-white-2 w-100 d-flex j-center p-3 message-img">
                                <p class="fs-15 font-weight-bold m-0" style="font-size:40px;">ROPA Y CALZADO</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 m-0 p-0 d-flex bg-normal wow slideInUp delay-1s" style="background-image:url('/images/electrodomesticos.jpg');">
                            <div class="bg-opacity-white-2 w-100 d-flex j-center p-3 message-img">
                                <p class="fs-15 font-weight-bold m-0" style="font-size:20px;">ELECTRODOMESTICOS</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 m-0 p-0 d-flex bg-normal wow slideInRight delay-1s" style="background-image:url('/images/supermarket.jpg');">
                            <div class="bg-opacity-white-2 w-100 d-flex j-center p-3 message-img">
                                <p class="fs-15 font-weight-bold m-0" style="font-size:40px;">VIVERES - ALIMENTOS</p>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0 p-0 w-100 overflow-hidden-cont">
                        <div class="col-12 col-sm-6 mt-5 text-right wow slideInLeft delay-1s" style="border-right:5px solid black">
                            <h3 class="text-right w-100" style="font-size:50px"><span class="font-weight-bold">10 AÑOS</span> ofreciendo la mejor logistica de envios</h3>
                            <img src="/images/shipping.jpg" class="w-100 wow slideInLeft delay-2s" style="max-width:1000px;" />
                        </div>
                        <div class="col-12 col-sm-6 mt-0 mt-sm-5 d-flex j-center wow slideInRight delay-1s">
                            <p class="text-justify" style="font-size:25px;">Nos caracterizamos por un servicio de calidad y con altos estandares de eficiencia en general. 10 años haciendote llegar los mejores productos a cualquier parte del mundo. Contamos con los mejores provedoores de electrodomesticos, tecnologia, lenceria, ropa, alimentos no perecederos, quincalleria, servicios y mucho mas. Descubre todas las ofertas y promociones que tenemos para ti. Nuestra principal motivación es proveer sonrisas y satisfacción hacia nuestros clientes, sé parte del equipo SellSelf! Adaptandonos a la tecnologia y siendo eCommerce virtual desde 2018. Loren ipsum sell self this is the shop Loren ipsum sell self this is the shop Loren ipsum sell self this is the shop Loren ipsum sell self this is the shop Loren ipsum sell self this is the shop Loren ipsum sell self this is the shop</p>
                        </div>
                    </div>
                    <h2 id="buyItems" class="text-center font-weight-bold w-100 p-3 mt-5 wow slideInRight">ELIGE LO MEJOR PARA TI Y LOS TUYOS</h2>
                    <div class="row m-0 p-3 wow slideInLeft delay-1s">
                        <div class="col-12 col-sm-6 col-md-4 p-0 m-auto container-compra d-flex" style="background-image:url('/images/clothes.jpg');" v-for="producto in productos" :key="producto.InvID" v-if="producto.InvStatus == 'HABILITADO' && producto.InvCantidad != 0">
                            <div class="details-compra mt-auto p-3 w-100">
                                <div class="row m-0 p-0 w-100">
                                    <div class="col-9 m-0 p-0 text-left">
                                        <p class="font-weight-bold mb-0 color-white text-left">{{producto.InvProducto}}</p>
                                        <span class="color-white">Only {{producto.InvCantidad}} in stock</span>
                                    </div>
                                    <div class="col-3 m-0 p-0 d-flex j-center">
                                        <p class="mb-0" data-toggle="modal" data-target="#modalComprarProducto" v-on:click="selected = JSON.parse(JSON.stringify(producto))">VER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Comprar producto -->
        <div class="modal fade" id="modalComprarProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <form v-on:submit.prevent="sendOrder()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">{{selected.InvProducto}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center w-100">
                        <img src="/images/blusa.png" width="320" />
                    </div>
                    <p class="text-justify">{{selected.InvDescripcion}}</p>
                    <p class="text-center font-weight-bold">SOLO {{selected.InvCantidad}} DISPONIBLES</p>
                    <button type="button" class="btn btn-info w-100" v-if="buy.status != true" v-on:click="buy.status = true">COMPRAR</button>
                    <div v-if="buy.status == true" class="row m-0 p-0">
                        <div class="col-12 col-sm-6">
                            <span>Producto</span>
                            <p class="font-weight-bold text-justify">{{selected.InvProducto}}</p>
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>Cantidad</span>
                            <input type="number" required class="form-control w-100" v-model.number="newOrder.PedidoCantidad" />
                        </div>
                        <div class="col-12">
                            <span>Nombre Completo</span>
                            <input type="text" required class="form-control w-100" v-model="newOrder.PedidoClienteNombre" />
                        </div>
                        <div class="col-12">
                            <span>Cedula/Pasaporte del Cliente</span>
                            <input type="text" class="form-control w-100" v-model="newOrder.PedidoClienteIDCard" />
                        </div>
                        <div class="col-12">
                            <span>Direccion</span>
                            <input type="text" class="form-control w-100" v-model="newOrder.PedidoDireccion" />
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>Telefono</span>
                            <input type="text" class="form-control w-100" v-model="newOrder.PedidoClienteTelefono" />
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>E-mail</span>
                            <input type="email" class="form-control w-100" v-model="newOrder.PedidoClienteEmail" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                    <button type="submit" class="btn btn-primary" v-if="buy.status == true">COMPRAR</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Raleway|Sofia');
*{
    font-family:'Raleway', sans-serif;
}
.container-compra{
    min-height:400px;
}
.details-compra{
    padding:1rem;
    background-color:rgba(1,1,1,.5);
    color:white !important;
}
    .title-page{
        font-size:8vw;
    }
    .slogan-page{
        font-size:3.3vw;
        text-shadow:3px 3px rgba(255,255,255,.25);
        letter-spacing:8px;
    }
@media screen and (max-width:768px){
    .title-page{
        font-size:14vw !important;
    }
    .slogan-page{
        font-size:5vw !important;
        padding-left:1rem;
        padding-right:1rem;
    }
}
</style>
<script>
    import Swal from 'sweetalert2'
    export default{
        name:'inicio',
        data(){
            return{
                productos:[],
                status:{
                    loading:'',
                    ajax:'',
                },
                selected:{
                    InvProducto:'',
                    InvID:'',
                    InvDescripcion:'',
                    InvStatus:'',
                    InvCantidad:'',
                },
                buy:{
                    status:false,
                },
                newOrder:{
                    PedidoClienteNombre:'',
                    PedidoClienteIDCard:'',
                    PedidoCantidad:'',
                    PedidoProducto:'',
                    PedidoDireccion:'',
                    PedidoClienteTelefono:'',
                    PedidoClienteEmail:'',
                },
                newType:{
                status:{
                    loading:'',
                    ajax:'',
                },
            },
            }
        },
        mounted(){
            this.LeerRegistros();
        },
        methods:{
            sendOrder(){
                var self = this;
                var maxCantidad = parseInt(self.selected.InvCantidad);
                console.log(maxCantidad);
                if(self.newOrder.PedidoCantidad > maxCantidad){
                    Swal.fire({
                        type: 'error',
                        title: 'Lo sentimos',
                        text: 'Introdujo una cantidad mayor a la disponibilidad de nuestro inventario. Por favor, introduzca una cantidad menor a '+self.selected.InvCantidad,
                    })
                }else{
                $.ajax({
                    url:"/registros/AgregarOrden",
                    type:"POST",
                    data:{
                        PedidoClienteNombre: self.newOrder.PedidoClienteNombre,
                        PedidoClienteIDCard: self.newOrder.PedidoClienteIDCard,
                        PedidoCantidad: self.newOrder.PedidoCantidad,
                        PedidoProducto: parseInt(self.selected.InvID),
                        PedidoDireccion: self.newOrder.PedidoDireccion,
                        PedidoClienteTelefono: self.newOrder.PedidoClienteTelefono,
                        PedidoClienteEmail: self.newOrder.PedidoClienteEmail
                    },
                    async:true,
                    timeout:10000,
                    beforeSend:function(){
                        self.newType.status.loading = true;
                        self.newType.status.ajax = true;
                    },
                    success:function(response){
                        try{
                            if(response.status){
                                self.BajarCantidad();
                            }else{
                                console.log("CrearOrden obtuvo un error: "+response.message);
                                console.log("CrearOrden recibió: "+response);    
                                self.newType.status.loading = false;
                                Swal.fire({
                                    type: 'error',
                                    title: 'Lo sentimos',
                                    text: 'Ocurrió un error. Verifique su conexión a internet.',
                                })
                            }
                        } catch (error){
                            console.log("CrearOrden obtuvo un error: "+error);
                            console.log("CrearOrden recibió: "+response);
                            self.newType.status.loading = false;
                            Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        }
                    },
                    complete:function(){
                        setTimeout(function(){
                            self.newType.status.loading = false;
                            if(self.newType.status.ajax === true){
                                Swal.fire({
                                    type: 'error',
                                    title: 'Lo sentimos',
                                    text: 'Ocurrió un error. Verifique su conexión a internet.',
                                })
                            }
                        },$);
                    } 
                });
                } 
            },
            BajarCantidad(){
                var self = this;
                var newCantidad = (parseInt(self.selected.InvCantidad) - self.newOrder.PedidoCantidad);             
                $.ajax({
                url:"/registros/modificar/"+self.selected.InvID,
                type:"POST",
                data:{
                    InvCantidad: newCantidad,
                    InvProducto: self.selected.InvProducto,
                    InvDescripcion: self.selected.InvDescripcion,
                    InvStatus: self.selected.InvStatus
                },
                async:true,
                timeout:10000,
                success:function(response){
                    try{
                        if(response.status){
                                $('#modalComprarProducto').modal('hide');                                
                                self.newType.status.loading = false;
                                self.newType.status.ajax = false;
                                self.LeerRegistros();
                            Swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: 'Compraste el producto exitosamente',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            self.LeerRegistros();
                        }else{
                            self.newType.status.loading = false;
                            Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                            console.log("ReducirCantidad obtuvo un error: "+response.message);
                            console.log("ReducirCantidad recibió: "+response);                            }
                    } catch (error){
                        console.log("ReducirCantidad obtuvo un error: "+error);
                        self.newType.status.loading = false;
                        Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        console.log("ReducirCantidad recibió: "+response)
                    }
                },
                complete:function(){
                    setTimeout(function(){
                        self.newType.status.loading = false;
                        if(self.newType.status.ajax === true){
                            Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        }
                    },$);
                }
            })
            },
            LeerRegistros(){
                var self=this;
                $.ajax({
                    url:"/registros/LeerProductos",
                    type:"GET",
                    async:true,
                    timeout:10000,
                    beforeSend:function(object){
                        self.status.loading = true;
                        self.status.ajax = true;
                    },
                    success:function(response){
                        try{
                            if(response.status){
                                self.status.loading = false;
                                self.status.ajax = false;
                                self.productos=response.values;
                            }else{
                                self.status.loading = false;
                                Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                                })
                                console.log("LeerPeriodos recibió: "+response);  
                                                        }
                        } catch (error){
                                Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                                })
                            self.status.loading = false;
                            console.log(response)
                        }
                    },
                    complete:function(){
                        setTimeout(function(){
                        self.status.loading = false;
                        if(self.status.ajax == true){
                            Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        }
                        },$);
                    }
                })
            }
        }
    }
</script>
<style>
.bg-normal{
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    min-height:500px;
}
.message-img{
    transition:height 1s;
    -webkit-transition:height 1s;
    height:0px;
    overflow:hidden;
    visibility:hidden;
}
.bg-normal:hover > .message-img{
    height:500px !important;
    visibility:visible !important;
}
.bg-normal:hover ~ .message-img{
    height:500px !important;
    visibility:visible !important;
}
.bg-opacity-white-2{
    background-color:rgba(255,255,255,.5);
}
</style>