from msilib.schema import ListView
from pyexpat import model
from rest_framework import serializers
from .models import Post,Vote


class PostSerializers(serializers.ModelSerializer):
    posters=serializers.ReadOnlyField(source='poster.username')
    poster_id=serializers.ReadOnlyField(source='poster.id')
    votes=serializers.SerializerMethodField()
    class Meta:
        model=Post
        fields = ['id', 'title', 'url', 'posters', 'poster_id','created_date','votes',]

    def get_votes(self,post):
        return Vote.objects.filter(post=post).count()


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Vote
        fields = ['id']




