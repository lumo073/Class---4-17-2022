from flask import Flask,request,jsonify
import db
from bson.objectid import ObjectId

app=Flask(__name__)

@app.route('/test')
def test():
    db.db.test.insert_one({"name":"Santosh"})
    return "connected to the database"


@app.route('/postdata',methods=['POST'])
def postData():
    myCollection=db.db.product
    product_name=request.json['product_name']
    price=request.json['price']
    stock=request.json['stock']
    category=request.json['category']
    myCollection.insert_one({'product_name':product_name,'price':price,'stock':stock,'category':category})
    return jsonify({'product':product_name,'price':price,'stock':stock,'category':category})

@app.route('/showdata',methods=['GET'])
def showData():
    product=list()
    myCollection=db.db.product
    for data in myCollection.find():
        product.append({'name':data['product_name'],'price':data['price'],'stock':data['stock'],'category':data['category']})
    return jsonify(product)

@app.route('/singledata/<id>',methods=['GET'])
def productDetails(id):
    myCollection=db.db.product
    data=myCollection.find_one({'_id':ObjectId(id)})
    return jsonify({'name':data['product_name'],'price':data['price'],'stock':data['stock'],'category':data['category']})


@app.route('/deleteproduct/<id>',methods=['DELETE'])
def deleteProduct(id):
    myCollection=db.db.product
    data=myCollection.find_one({'_id':ObjectId(id)})
    if data:
        myCollection.delete_one({'_id':ObjectId(id)})
        return jsonify({'success':'product deleted successfull'})
    else:
        return jsonify({'error':'product with that id not found'})

@app.route('/updateproduct/<id>',methods=['PUT'])
def updataProduct(id):
    myCollection=db.db.product
    data=myCollection.find_one({'_id':ObjectId(id)})
    if data:
        product_name=request.json['product_name']
        price=request.json['price']
        stock=request.json['stock']
        category=request.json['category']
        myCollection.update_one({'product_name':product_name,'price':price,'stock':stock,'category':category})
        return jsonify({'product':product_name,'price':price,'stock':stock,'category':category})
    else:
        return jsonify({'error':'product with that id not found'})


if __name__=='__main__':
    app.run(debug=True)


