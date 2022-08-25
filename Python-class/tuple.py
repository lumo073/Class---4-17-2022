#tuple similar to list but immutable ie element inside tuple cannot be changed

fruits=('mango','orange','apple','banana','cherry')
print(fruits)

print(fruits[0])
print(fruits[0:3])

#len() -> count the number of elements in the tuple
print(len(fruits))

#basic tuple method
#use .index to enter a value and return the index
print(fruits.index('orange'))

#use .count to count the number of times a value appear
print(fruits.count('apple'))
