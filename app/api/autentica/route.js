// pages/api/autenticacao.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {  //export const postAutenticacao = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const url = 'mongodb://localhost:27017';
      const dbName = 'logan';
      const collectionName = 'dados';
      const client = new MongoClient(url);

      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      const result = await collection.findOne({ usuario: email, senha: password });
      if (result) {
        res.status(200).json({ authenticated: true, message: 'Autenticado com sucesso' });
      } else {
        res.status(200).json({ authenticated: false, message: 'Credenciais inválidas' });
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      res.status(500).json({ authenticated: false, message: 'Erro ao autenticar' });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
