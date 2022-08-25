class Bird:
    def intro(self):
        print('There are many types of birds')
    
    def fly(self):
        print('Most of birds can fly but some cannot')

class Pigeon(Bird):
    def fly(self):
        print('Pigeons can fly')

class Penguin(Bird):
    def fly(self):
        print('Penguin cannot fly')

obj_bird=Bird()
obj_bird.intro()
obj_bird.fly()

obj_pigeon=Pigeon()
obj_pigeon.intro()
obj_pigeon.fly()

obj_penguin=Penguin()
obj_penguin.intro()
obj_penguin.fly()

#numpy and pandas

