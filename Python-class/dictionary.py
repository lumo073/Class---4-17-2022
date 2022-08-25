#dictionary are known as objects in other programming language and they always comes in key value pair

student={"first_name":"santosh","last_name":"khatiwada","age":22,"height":5.9}
print(student['first_name'])

item={"value1":15,"value2":[2,5,7,11],"value3":[10,20,30]}
print(item["value2"])
print(item["value2"][2])

#create a new dictionary

d={}
d['fruit']='apple' #value asign in d
d['vegetable']='potato'
print(d)

#nesting with dictionary
nest_dist={"key1":{'nestkey':{'subnestkey':'finalvalue'}}}
print(nest_dist['key1']['nestkey']['subnestkey'])

#dictionary method
#keys() -> it only print the key of the dictionary

print(student.keys())

#values() -> it only print all value of the dictionary
print(student.values())