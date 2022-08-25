from flask import Flask,jsonify
app=Flask(__name__)

@app.route('/')
def index():
    return "Hello Flask App"


@app.route('/test')
def test():
    return "<h1> Hello World </h1>"

@app.route('/data')
def data():
    # newdata="hello world"
    newdata=str(20+20)
    return newdata

@app.route('/jsondata')
def mydata():
    name="Santosh"
    age=23
    myjson={
        "Name":name,
        "Age":age,
        "Phones":[
            {
                "PhoneName":"Samsung",
                "PhoneNumber":1111111111
            },
            {
                "PhoneName":"Redmi",
                "PhoneNumber":1234567890
            }
        ]
    }
    return jsonify(myjson)




if __name__=="__main__":
    app.run(debug=True)
