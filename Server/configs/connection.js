var mysql = require("mysql");

var connections=[];

    function setConnection(settings){
        var connection=mysql.createConnection(settings);
        connection.connect(function(error){
            try{
                if(error) throw error;
                console.log("Base de datos: Conectada y funcional");
                connection.on('error',function(error){
                    console.log("Base de datos: Error, Reconectando...");
                    if((error.code === 'PROTOCOL_CONNECTION_LOST' || error.code === 'ECONNRESET')){
                        setConnection(settings);
                    }
                });
                connections[settings.database]=connection;
            } catch (error){
                console.log("Base de datos: Error, Intentando conectar...");
                setConnection(settings);
            }
        })
    }

setConnection({
    host: "remotemysql.com",
    user: "zATbKKw5W0",
    password: "XBnGBTSvCp",
    database: "zATbKKw5W0",
    port: "3306"
});

module.exports = connections;