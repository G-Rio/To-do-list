//FAZER A LIGAÇÃO DO BACK END COM O EXPRESS
const express = require("express");
const app = express();
const routes=require("./routes/routes")
//RESPONSAVEL POR DIRECIONAR AS PASTAS PELO SERVIDOR
const path = require("path");
const routes = require("./routes/routes");

//DEFINIR VARIAVEL PARA A PORTA QUE ESTA SENDO ALOCADO O SERVIDOR
const port = 3000;

//MOSTRAR PARA O BACK END QUE O ARQUIVO É EJS 
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(routes)

/*
APAGO ESTA ROTA POIS FOI DIVIDIDO EM METODO E ROTA E USO UM APP.USE
//ROTA PODE SER ALTERADA
app.get("/", (req, res) => {
    res.render("index");
});
*/

//RODA O APP NA PORT 3000 NA MAQUINA/ FUNÇÃO DE CALL BACK
app.listen(port, () =>{
    console.log('A aplicação está rodando em http://localhost:'+ port + ' The aplication is running on http://localhost:' + port);
});
