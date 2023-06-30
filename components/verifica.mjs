


import React from 'react';
import { MongoClient } from 'mongodb';
import Card from './card';
import Alerta from './alerta';

const url = 'mongodb://localhost:27017';
const dbName = 'logan';
const collectionName = 'capacete';
const client = new MongoClient(url);

let verificacao = null; // Variável de instância para armazenar o valor de verificação

const fetchData = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log('Conexão com o banco de dados estabelecida.');

    const collection = db.collection(collectionName);

    setInterval(async () => {
      const result = await collection.findOne();
      verificacao = result.verificacao; // Atualiza o valor da variável de instância
    }, 2000);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
};

const ConnectToDB = () => {
  console.log('Valor da verificação:', verificacao);

  return (
    <div>
      {verificacao === true ? <Alerta /> : <Card />}
    </div>
  );
};

fetchData(); // Inicia a busca de dados no banco de dados

export default ConnectToDB;
