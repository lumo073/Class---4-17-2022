my_list=[1,2,3,4,5]
my_list2=['a','b','c','d','e','f']

x=list(zip(my_list,my_list2))
print(x)

for item,item2 in zip(my_list,my_list2):
    print('For this tuple, first item is {} and second item is {}'.format(item,item2))

