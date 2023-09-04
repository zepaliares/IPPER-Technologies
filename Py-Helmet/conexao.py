# -*- coding: latin-1 -*-

from pymongo import MongoClient

# Configurações da conexão
mongo_host = 'localhost'
mongo_port = 27017
mongo_db = 'logan'

# Conectando ao MongoDB
client = MongoClient(mongo_host, mongo_port)
db = client[mongo_db]

# Função para realizar a alteração no campo booleano
def sem_capacete():
    # Acessando a coleção desejada
    collection = db['capacete']

    # Fazendo a alteração
    collection.update_one(
        {'_id': 1},
        {'$set': {'verificacao': True}}
    )

def com_capacete():
    print('com capacete')
    