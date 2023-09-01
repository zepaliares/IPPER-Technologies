import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'logan';
const collectionName = 'dados';
const client = new MongoClient(url);

let usuarios: string[] = [];
let senhas: string[] = [];

const fetchCredentials = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log('Conexão com o banco de dados estabelecida.');
    

    const collection = db.collection(collectionName);

    const results = await collection.find().toArray();
    usuarios = results.map((result) => result.usuario);
    senhas = results.map((result) => result.senha);

    console.log(usuarios)
    console.log(senhas)

 
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
};


const ConnectDB = () => {
  console.log('Valor do usuario:', usuarios);
  console.log('Valor do senha:', senhas);

  return (
    null
  );
};

fetchCredentials(); // Inicia a busca de dados no banco de dados

export default ConnectDB;
// export { usuarios as usuarios, senhas as senhas };
