# -*- coding: latin-1 -*-

from pymongo import MongoClient

# Configura��es da conex�o
mongo_host = 'localhost'
mongo_port = 27017
mongo_db = 'logan'

# Conectando ao MongoDB
client = MongoClient(mongo_host, mongo_port)
db = client[mongo_db]

# Fun��o para realizar a altera��o no campo booleano
def sem_capacete():
    # Acessando a cole��o desejada
    collection = db['capacete']

    # Fazendo a altera��o
    collection.update_one(
        {'_id': 1},
        {'$set': {'verificacao': True}}
    )

def com_capacete():
    print('com capacete')
    