from flask import Flask
from flask_pymongo import pymongo

CONNECTION_STRING="mongodb+srv://Lumo:wus!kd9je74Zf5Q@cluster0.0yiyjhv.mongodb.net/?retryWrites=true&w=majority"

client=pymongo.MongoClient(CONNECTION_STRING)
db=client.get_database('db_flask')