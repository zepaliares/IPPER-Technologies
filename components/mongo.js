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
