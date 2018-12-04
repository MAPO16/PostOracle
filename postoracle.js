const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var dao = require('./connorcl');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.post('/rest/empleado', function(req, res) {

  sql = "INSERT INTO empleados(id_empleado,nombre)" +
          "Values (:id_empleado,:nombre)";

  
   var id_empleado = req.body.id_empleado;
   var nombre  = req.body.nombre;
   console.log(nombre);
   console.log(id_empleado);

   dao.open(sql,[id_empleado,nombre],true,res);

    res.end;
});


app.listen(2321, function () {
 console.log('Node app is running on port 2321');

});