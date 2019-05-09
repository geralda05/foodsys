var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var collector = express();

collector.use(bodyParser.urlencoded({
  extended:true,
}))

collector.use(bodyParser.json());
collector.use(cookieParser());
collector.use(express.static(path.join(__dirname, 'public')));

/* Conexión de la BD */
var connections = require('../configs/connection');

collector.get('/LeerOrdenes/:PedidoID?',function(req,res){
  var Response = {
      status:true,
      message:'',
  }
  try{
      let Request = [
          (req.params.PedidoID ? req.params.PedidoID:null),
      ]
      var SQL = (req.params.PedidoID ? "SELECT * FROM ordenes WHERE PedidoID=? ":"SELECT * FROM ordenes");
      connections.zATbKKw5W0.query(SQL,Request,function(error,rows){
          if(error){
              Response.status=false;
              Response.message=String(error);
          }else{
              Response.values=rows;
          }
          res.send(Response);
          return res.end();
      });
  } catch (error) {
      Response.status=false;
      Response.message=String(error);
      res.send(Response);
  }
})

collector.get('/LeerProductos/:InvID?',function(req,res){
  var Response = {
      status:true,
      message:'',
  }
  try{
      let Request = [
          (req.params.InvID ? req.params.InvID:null),
      ]
      var SQL = (req.params.InvID ? "SELECT * FROM inventario WHERE InvID=? ":"SELECT * FROM inventario");
      connections.zATbKKw5W0.query(SQL,Request,function(error,rows){
          if(error){
              Response.status=false;
              Response.message=String(error);
          }else{
              Response.values=rows;
          }
          res.send(Response);
          return res.end();
      });
  } catch (error) {
      Response.status=false;
      Response.message=String(error);
      res.send(Response);
  }
})

collector.post('/AgregarProducto',function(req,res){
  var Response = {
      status:true,
      message:'',
  }
  try{
      if(typeof req.body.InvProducto !== 'undefined'){

      let Request = [
          req.body.InvProducto,
          req.body.InvCantidad,
          req.body.InvDescripcion,
          req.body.InvStatus
      ]
      var SQL = "INSERT INTO inventario (InvProducto,InvCantidad,InvDescripcion,InvStatus) VALUES (?,?,?,?)";
      connections.zATbKKw5W0.query(SQL,Request,function(error,rows){
          if(error){
              Response.status=false;
              Response.message=String(error);
          }else{
              Response.values=rows;
          }
          res.send(Response);
          return res.end();
      });
  }else{
      Response.status=false;
      Response.message="Datos incompletos";
      res.send(Response);
  }
  } catch (error) {
      Response.status=false;
      Response.message=String(error);
      res.send(Response);
  }
})

collector.post('/AgregarOrden',function(req,res){
  var Response = {
      status:true,
      message:'',
  }
  try{
      if(typeof req.body.PedidoClienteNombre !== 'undefined'){

      let Request = [
          req.body.PedidoClienteNombre,
          req.body.PedidoClienteIDCard,
          req.body.PedidoCantidad,
          req.body.PedidoProducto,
          req.body.PedidoDireccion,
          req.body.PedidoClienteTelefono,
          req.body.PedidoClienteEmail
      ]
      var SQL = "INSERT INTO ordenes (PedidoClienteNombre,PedidoClienteIDCard,PedidoCantidad,PedidoProducto,PedidoDireccion,PedidoClienteTelefono,PedidoClienteEmail) VALUES (?,?,?,?,?,?,?)";
      connections.zATbKKw5W0.query(SQL,Request,function(error,rows){
          if(error){
              Response.status=false;
              Response.message=String(error);
          }else{
              Response.values=rows;
          }
          res.send(Response);
          return res.end();
      });
  }else{
      Response.status=false;
      Response.message="Datos incompletos";
      res.send(Response);
  }
  } catch (error) {
      Response.status=false;
      Response.message=String(error);
      res.send(Response);
  }
})

collector.post('/modificar/:InvID',function(req,res){
  var Response = {
      status:true,
      message:'',
  }
  try{
      if(typeof req.body.InvProducto !== 'undefined'){

      let Request = [
          req.body.InvProducto,
          req.body.InvDescripcion,
          req.body.InvStatus,
          req.body.InvCantidad
      ]
      var SQL = "UPDATE inventario SET InvProducto=? , InvDescripcion=?, InvStatus=?, InvCantidad=? WHERE InvID='"+req.params.InvID+"'";
      connections.zATbKKw5W0.query(SQL,Request,function(error,rows){
          if(error){
              Response.status=false;
              Response.message=String(error);
          }else{
              Response.values=rows;
          }
          res.send(Response);
          return res.end();
      });
  }else{
      Response.status=false;
      Response.message="Datos incompletos";
      res.send(Response);
  }
  } catch (error) {
      Response.status=false;
      Response.message=String(error);
      res.send(Response);
  }
})

collector.get('/eliminarProductos/:InvID',function(req,res){
  var Response = {
      status:true,
      message:'',
  }
  try{
      var SQL = "DELETE FROM inventario WHERE InvID='"+req.params.InvID+"'";
      connections.zATbKKw5W0.query(SQL,function(error,rows){
          if(error){
              Response.status=false;
              Response.message=String(error);
          }else{
              Response.values=rows;
          }
          res.send(Response);
          return res.end();
      });
  } catch (error) {
      Response.status=false;
      Response.message=String(error);
      res.send(Response);
  }
})

module.exports = collector;