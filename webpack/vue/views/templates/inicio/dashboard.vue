<template>
    <div>
        <div class="w-100 parallax-auto d-flex minh-100vh" style="background-image:url('/images/bg-ecommerce.png')">
            <div class="w-100 bg-opacity d-flex j-center p-3">
                <div class="w-100 overflow-hidden-cont" style="max-width:1100px;">
                    <div class="row w-100 m-0 p-0">
                        <div class="col-12 col-sm-10 d-flex">
                            <div class="card w-100 mb-3 p-3 animated bounceInLeft">
                                <h2 class="mb-0">Productos disponibles</h2>
                            </div>
                        </div>
                        <div class="col-12 col-sm-2 d-flex animated bounceInRight">
                            <div class="bg-success text-white w-100 mb-3 p-2 d-flex j-center" data-toggle="modal" data-target="#modalNuevoProducto">
                                <p class="mb-0">NUEVO</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-100" style="padding-left:15px;padding-right:15px">
                    <div class="card w-100 wow slideInLeft">
                        <div class="accordion" id="accordionExample">
                            <div class="card wow slideInLeft" v-for="producto in productos" :key="producto.InvID">
                                <div class="card-header" :id="'heading'+producto.InvID">
                                    <h5 class="mb-0">
                                        <button class="btn bg-none w-100 collapsed text-productos-btn" type="button" data-toggle="collapse" :data-target="'#collapse'+producto.InvID" aria-expanded="true" :aria-controls="'collapse'+producto.InvID">
                                            {{producto.InvProducto}}. Disponibles: {{producto.InvCantidad}}
                                        </button>
                                    </h5>
                                </div>
                                <div :id="'collapse'+producto.InvID" class="collapse" :aria-labelledby="'heading'+producto.InvID" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="row m-0 p-0">
                                            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                                <img src="/images/blusa.png" class="w-100" />
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-9 col-md-10 row m-0">
                                                <p class="text-justify fs-25 mb-auto w-100 mb-0" style="padding-left:15px;padding-right:15px">{{producto.InvDescripcion}}</p>
                                                <div class="row m-0 p-0 w-100 mt-auto">
                                                    <div class="col-12 col-sm-6 col-md-auto ml-auto">
                                                        <button class="btn btn-success w-100 fs-25 px-3 mt-2" data-toggle="modal" data-target="#modalModificarProducto" v-on:click="modifyProducto = JSON.parse(JSON.stringify(producto))">EDITAR</button>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-auto">
                                                        <button class="btn btn-info w-100 fs-25 px-3 mt-2" v-on:click="modifyStatus(producto)"><span v-if="producto.InvStatus == 'HABILITADO'">INHABILITAR</span><span v-if="producto.InvStatus == 'INHABILITADO'">HABILITAR</span></button>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-auto">
                                                        <button class="btn btn-danger w-100 fs-25 px-3 mt-2" v-on:click="deleteProduct(producto)">ELIMINAR</button>
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
        </div>
        <!-- Añadir producto -->
        <div class="modal fade" id="modalNuevoProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <form v-on:submit.prevent="sendProducto()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Añadir producto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row m-0 p-0">
                        <div class="col-12 col-sm-6">
                            <span>Nombre del Producto</span>
                            <input class="form-control w-100" v-model="newProducto.InvProducto" type="text"/>
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>Cantidad</span>
                            <input class="form-control w-100" v-model="newProducto.InvCantidad" type="number" />
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>Descripcion del Producto</span>
                            <textarea class="form-control w-100" v-model="newProducto.InvDescripcion"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                    <button type="submit" class="btn btn-primary">GUARDAR</button>
                </div>
                </form>
            </div>
        </div>
        <!-- Modificar producto -->
        <div class="modal fade" id="modalModificarProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <form v-on:submit.prevent="modifyProduct()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Modificar producto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row m-0 p-0">
                        <div class="col-12 col-sm-6">
                            <span>Nombre del Producto</span>
                            <input class="form-control w-100" v-model="modifyProducto.InvProducto" type="text"/>
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>Cantidad</span>
                            <input class="form-control w-100" v-model="modifyProducto.InvCantidad" type="number" />
                        </div>
                        <div class="col-12 col-sm-6">
                            <span>Descripcion del Producto</span>
                            <textarea class="form-control w-100" v-model="modifyProducto.InvDescripcion"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                    <button type="submit" class="btn btn-primary">GUARDAR</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
.text-productos-btn{
    color:black;
    font-size:25px;
    background:none !important;
    text-align:left !important;
}
.fs-25{
    font-size:25px;
}
</style>
<script>
import Swal from 'sweetalert2'
export default {
    name:'',
    data(){
        return{
            productos:[],
            status:{
                loading:'',
                ajax:'',
            },
            newType:{
                status:{
                    loading:'',
                    ajax:'',
                },
            },
            modifyProducts:{
                status:{
                    loading:'',
                    ajax:'',
                },
            },
            deletestatus:{
                loading:'',
                ajax:'',
            },
            newProducto:{
                InvProducto:'',
                InvDescripcion:'',
                InvCantidad:'',
            },
            modifyProducto:{
                InvProducto:'',
                InvDescripcion:'',
                InvCantidad:'',
            },
            newStatus:'',
        }
    },
    mounted(){
        this.LeerRegistros();
    },
    methods:{
        deleteProduct(producto){
            var self = this;
            Swal.fire({
                title: 'Planilla de Inscripción',
                text: "¿Desea eliminar el producto llamado "+producto.InvProducto+"?",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Continuar',
            }).then((result) => {
                if (result.value) {
                    self.deleteProducto(producto);
                }
            })
        },
        deleteProducto(productoss){
            var self=this;
            $.ajax({
                url:"/registros/eliminarProductos/"+productoss.InvID,
                type:"GET",
                async:true,
                timeout:10000,
                beforeSend:function(object){
                    self.deletestatus.loading = true;
                    self.deletestatus.ajax = true;
                },
                success:function(response){
                    try{
                        if(response.status){
                            self.deletestatus.loading = false;
                            self.deletestatus.ajax = false;
                            Swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: 'Se eliminó el producto exitosamente',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            self.LeerRegistros();
                        }else{
                            console.log("EliminarProductos obtuvo un error: "+response.message);
                                                            self.deletestatus.loading = false;
                                                            Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                            console.log("EliminarProductos recibió: "+response);                            }
                    } catch (error){
                        console.log("EliminarProductos obtuvo un error: "+error);
                                                        self.deletestatus.loading = false;
                                                        Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        console.log("EliminarProductos recibió: "+response)
                    }
                },
                complete:function(){
                    setTimeout(function(){
                                self.deletestatus.loading = false;
                                if(self.deletestatus.ajax === true){
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
        modifyStatus(InvIDstatus){
            var self = this;
            if(InvIDstatus.InvStatus == 'HABILITADO'){
                this.newStatus = 'INHABILITADO'
            }else{
                this.newStatus = 'HABILITADO'
            }
            $.ajax({
                url:"/registros/modificar/"+InvIDstatus.InvID,
                type:"POST",
                data:{
                    InvCantidad: InvIDstatus.InvCantidad,
                    InvProducto: InvIDstatus.InvProducto,
                    InvDescripcion: InvIDstatus.InvDescripcion,
                    InvStatus: self.newStatus
                },
                async:true,
                timeout:10000,
                beforeSend:function(){
                    self.modifyProducts.status.loading = true;
                    self.modifyProducts.status.ajax = true;
                },
                success:function(response){
                    try{
                        if(response.status){
                            self.modifyProducts.status.loading = false;
                            self.modifyProducts.status.ajax = false;
                            $("#modalModificarProducto").modal("hide");
                            Swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: 'Se modificó el producto exitosamente',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            self.LeerRegistros();
                        }else{
                            self.modifyProducts.status.loading = false;
                            Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                            console.log("ModificarProductos obtuvo un error: "+response.message);
                            console.log("ModificarProductos recibió: "+response);                            }
                    } catch (error){
                        console.log("ModificarProductos obtuvo un error: "+error);
                        self.modifyProducts.status.loading = false;
                        Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        console.log("ModificarProductos recibió: "+response)
                    }
                },
                complete:function(){
                    setTimeout(function(){
                        self.modifyProducts.status.loading = false;
                        if(self.modifyProducts.status.ajax === true){
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
        modifyProduct(){
            var self = this;
            
            $.ajax({
                url:"/registros/modificar/"+self.modifyProducto.InvID,
                type:"POST",
                data:{
                    InvCantidad: self.modifyProducto.InvCantidad,
                    InvProducto: self.modifyProducto.InvProducto,
                    InvDescripcion: self.modifyProducto.InvDescripcion,
                    InvStatus: self.modifyProducto.InvStatus
                },
                async:true,
                timeout:10000,
                beforeSend:function(){
                    self.modifyProducts.status.loading = true;
                    self.modifyProducts.status.ajax = true;
                },
                success:function(response){
                    try{
                        if(response.status){
                            self.modifyProducts.status.loading = false;
                            self.modifyProducts.status.ajax = false;
                            $("#modalModificarProducto").modal("hide");
                            Swal.fire({
                                position: 'top-end',
                                type: 'success',
                                title: 'Se modificó el producto exitosamente',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            self.LeerRegistros();
                        }else{
                            self.modifyProducts.status.loading = false;
                            Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                            console.log("ModificarProductos obtuvo un error: "+response.message);
                            console.log("ModificarProductos recibió: "+response);                            }
                    } catch (error){
                        console.log("ModificarProductos obtuvo un error: "+error);
                        self.modifyProducts.status.loading = false;
                        Swal.fire({
                            type: 'error',
                            title: 'Lo sentimos',
                            text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        console.log("ModificarProductos recibió: "+response)
                    }
                },
                complete:function(){
                    setTimeout(function(){
                        self.modifyProducts.status.loading = false;
                        if(self.modifyProducts.status.ajax === true){
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
        sendProducto(){
            var self = this;
            $.ajax({
                url:"/registros/AgregarProducto",
                type:"POST",
                data:{
                    InvProducto: self.newProducto.InvProducto,
                    InvCantidad: self.newProducto.InvCantidad,
                    InvDescripcion: self.newProducto.InvDescripcion,
                    InvStatus: 'HABILITADO',
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
                            self.newType.status.loading = false;
                            self.newType.status.ajax = false;
                            self.LeerRegistros();
                            $('#modalNuevoProducto').modal('hide');
                        }else{
                            console.log("AgregarProducto obtuvo un error: "+response.message);
                            console.log("AgregarProducto recibió: "+response);    
                            self.newType.status.loading = false;
                            Swal.fire({
                                type: 'error',
                                title: 'Lo sentimos',
                                text: 'Ocurrió un error. Verifique su conexión a internet.',
                            })
                        }
                    } catch (error){
                        console.log("AgregarProducto obtuvo un error: "+error);
                        console.log("AgregarProducto recibió: "+response);
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
