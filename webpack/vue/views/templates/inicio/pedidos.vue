<template>
    <div>
        <div class="w-100 parallax-auto d-flex minh-100vh" style="background-image:url('/images/bg-ecommerce.png')">
            <div class="w-100 bg-opacity d-flex j-center p-3">
                <div class="w-100 overflow-hidden-cont" style="max-width:1100px;">
                    <div class="row w-100 m-0 p-0">
                        <div class="col-12 d-flex animated bounceInDown">
                            <div class="card w-100 mb-3 p-3">
                                <h2 class="mb-0">Pedidos registrados</h2>
                            </div>
                        </div>
                    </div>
                    <div class="w-100" style="padding-left:15px;padding-right:15px">
                    <div class="card w-100 wow bounceInRight">
                        <div class="accordion" id="accordionExample">
                            <div class="card wow bounceInRight" v-for="pedidos in ordenesProcesadas" :key="pedidos.PedidoID">
                                <div class="card-header" :id="'heading'+pedidos.PedidoID">
                                    <h5 class="mb-0">
                                        <button class="btn bg-none w-100 collapsed text-productos-btn" type="button" data-toggle="collapse" :data-target="'#collapse'+pedidos.PedidoID" aria-expanded="true" :aria-controls="'collapse'+pedidos.PedidoID">
                                            {{pedidos.PedidoClienteNombre}}. ORDEN: {{pedidos.PedidoCantidad}} piezas de {{pedidos.PedidoProducto}}
                                        </button>
                                    </h5>
                                </div>
                                <div :id="'collapse'+pedidos.PedidoID" class="collapse" :aria-labelledby="'heading'+pedidos.PedidoID" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="row m-0 p-0">
                                            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                                <img src="/images/blusa.png" class="w-100" />
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-9 col-md-10 row m-0">
                                                <p class="text-justify fs-25 mb-auto w-100 mb-0" style="padding-left:15px;padding-right:15px">Cliente: {{pedidos.PedidoClienteNombre}} {{pedidos.PedidoClienteIDCard}}<br>Direccion de envio: {{pedidos.PedidoDireccion}}<br>Información de contacto: {{pedidos.PedidoClienteTelefono}} {{pedidos.PedidoClienteEmail}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
export default{
    data(){
        return{
            ordenes:[],
            status:{
                loading:'',
                ajax:'',
            },
            ordenesProcesadas:[],
            productos:[],
        }
    },
    mounted(){
        this.LeerProductos();
    },
    methods:{
LeerProductos(){
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
                            self.LeerRegistros();
                        }else{
                            self.status.loading = false;
                            Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                            console.log(response);  
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
            })
        },
        LeerRegistros(){
            var self=this;
            $.ajax({
                url:"/registros/LeerOrdenes",
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
                            self.ordenes=response.values;
                            console.log(self.ordenes);
                            self.ordenes.forEach(function(orden){
                                console.log(orden);
                                const productoExtraido = self.productos.filter((b)=>{
                                    return b.InvID == orden.PedidoProducto;
                                })
                                self.ordenesProcesadas.push({
                                    PedidoID: orden.PedidoID,
                                    PedidoProducto: productoExtraido[0].InvProducto,
                                    PedidoCantidad: orden.PedidoCantidad,
                                    PedidoDireccion: orden.PedidoDireccion,
                                    PedidoClienteTelefono: orden.PedidoClienteTelefono,
                                    PedidoClienteEmail: orden.PedidoClienteEmail,
                                    PedidoClienteIDCard: orden.PedidoClienteIDCard,
                                    PedidoClienteNombre: orden.PedidoClienteNombre
                                })
                            })
                        }else{
                            self.status.loading = false;
                            Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                            console.log(response);  
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