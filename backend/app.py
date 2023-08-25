from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS 
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from secret import rutaSQL

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

app.config['SQLALCHEMY_DATABASE_URI'] = rutaSQL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Cliente(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    razonSocial = db.Column(db.String(50))
    nombre = db.Column(db.String(50))
    nif = db.Column(db.String(50))
    direccion = db.Column(db.String(50))
    poblacion = db.Column(db.String(50))
    telefono = db.Column(db.String(50))
    fechaCreacion = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, razonSocial, nombre, nif, direccion, poblacion, telefono):
        self.razonSocial = razonSocial
        self.nombre = nombre
        self.nif = nif
        self.direccion = direccion
        self.poblacion = poblacion
        self.telefono = telefono

class ClienteSchema(ma.Schema):
    class Meta:
        fields = ('id', 'razonSocial', 'nombre', 'nif', 'direccion', 'poblacion', 'telefono')

cliente_schema = ClienteSchema()
clientes_schema = ClienteSchema(many = True)

@app.route('/getClients', methods = ['GET'])
@cross_origin()
def get_clients():
    all_clients = Cliente.query.all()
    result = clientes_schema.dump(all_clients)
    return jsonify(result)

@app.route('/getClient/<id>/', methods = ['GET'])
@cross_origin()
def get_client(id):
    client = Cliente.query.get(id)
    return cliente_schema.jsonify(client)


@app.route('/newClient', methods = ['POST'])
@cross_origin()
def add_client():
    razonSocial = request.json['razonSocial']
    nombre = request.json['nombre']
    nif = request.json['nif']
    direccion = request.json['direccion']
    poblacion = request.json['poblacion']
    telefono = request.json['telefono']

    new_client = Cliente(razonSocial, nombre, nif, direccion, poblacion, telefono)

    db.session.add(new_client)
    db.session.commit()

    return cliente_schema.jsonify(new_client)

@app.route('/updateClient/<id>/', methods = ['PUT'])
@cross_origin()
def update_client(id):
    client = Cliente.query.get(id)

    client.razonSocial = request.json['razonSocial']
    client.nombre = request.json['nombre']
    client.nif = request.json['nif']
    client.direccion = request.json['direccion']
    client.poblacion = request.json['poblacion']
    client.telefono = request.json['telefono']

    db.session.commit()

    return cliente_schema.jsonify(client)

@app.route('/deleteClient/<id>/', methods = ['DELETE'])
@cross_origin()
def delete_client(id):
    client = Cliente.query.get(id)
    db.session.delete(client)
    db.session.commit()

    return cliente_schema.jsonify(client)

if __name__ == "__main__":
    # debug = True only in development mode
    app.run(debug = True)