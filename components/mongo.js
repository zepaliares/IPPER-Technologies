const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// Configurar a conexão com o banco de dados MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'logan';

const conectarMongoDB = async () => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
};


const atualizarExemplo = async (exemploId, atualizacaoExemplo) => {
  try {
    const db = await conectarMongoDB();
    const result = await db.collection('capacete').updateOne({ _id: exemploId }, atualizacaoExemplo);
    console.log('Exemplo atualizado com sucesso');
    console.log(result);
    return result;
  } catch (error) {
    console.error('Erro ao atualizar exemplo:', error);
    throw error;
  }
};

module.exports = { atualizarExemplo };




// import React from 'react';
// import { MongoClient } from 'mongodb';
// import Form from '../app/(auth)/signin/page';


// const url = 'mongodb://localhost:27017';
// const dbName = 'logan';
// const collectionName = 'dados';
// const client = new MongoClient(url);

// let verificacao = null; // Variável de instância para armazenar o valor de verificação
// console.log(email)
// const fetchData = async () => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     console.log('Conexão com o banco de dados estabelecida.');
// ollection(collectionName);

//     setInterval(async () => {
//       const result = await collection.findOne();
//       verificacao = result.verificacao; // Atualiza o valor da variável de instância
//     }, 2000);
//   } catch (error) {
//     console.error('Erro ao conectar ao banco de dados:', error);
//     throw error;
//   }
// };

// const ConnectToDB = () => {
//   console.log('Valor da verificação:', verificacao);

//   return (
//     <div>
//       {verificacao === true ? <Alerta /> : <Card />}
//     </div>
//   );
// };

// fetchData(); // Inicia a busca de dados no banco de dados

// export default ConnectToDB;


















