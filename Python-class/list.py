#list are similar to array in other programming language and list are mutable in element inside list ca be changed

fruits=['apple','banana','grapes','papaya','mango']
print(fruits)


#indexing
print(fruits[0])


#append() -> to add new element in list
fruits.append('orange')
print(fruits)

#pop() -> remove from the array, by default it remove the last elements and to remove elements from specific position use indexing ie pop(0)
fruits.pop()
print(fruits)
fruits.pop(2)
print(fruits)

#len() -> to count number of elements in list
print(len(fruits))

