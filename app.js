/******************************************************************************************
 * Objetivo: Criar uma API para manipular um JSON e retornar as informações para o FrontEnd, Mesclando FrontEnd com BackEnd
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 17/03/2023
 * Versão: 1.0
 ******************************************************************************************/

 /**
 * Express --> dependencia do Node, que permite a integração entre o protocolo http com o código
 * Comando para instalação do Express --> npm install express --save
 * 
 * Cors --> Gerenciador de permissões para o protocolo HTTP
 * Comando para instalação do Cors --> npm install cors --save
 * 
 * Body-Parser --> É uma dependencia que permite manipular dados enviados pelo body da requisição
 * Comando para instalação do Body-Parser --> npm install body-parser --save
 * 
 ***/

//import das dependencias para criar a API
//Responsável pelas requisições
const express = require('express');

//Responsável pelas permissões
const cors = require('cors');

//Responsável pela manipulação do body da requisição 
//Body conteudo da mensagem --> Header e Main
const bodyParser = require('body-parser');

//Import do arquivo de funções 
const contatosWhatsApp = require('./modulo/contatos.js');

//Cria um objeto com as informações da classe express
const app = express();

//Define as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API
    // * --> significa que a API será publica
    // IP --> se colocar o IP, a API somente responderá para aquela Máquina/Servidor/Requisição
    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors());

    next();
});