from turtle import title
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    title=models.CharField(max_length=150)
    url=models.URLField()
    poster=models.ForeignKey(User,on_delete=models.CASCADE)
    created_date=models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering=['-created_date']

    def __str__(self):
        return self.title

class Vote(models.Model):
    voter=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Post,on_delete=models.CASCADE)

