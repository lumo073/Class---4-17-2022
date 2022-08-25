from lib2to3.pgen2 import token
from turtle import pos
from django.shortcuts import render
from rest_framework import generics,permissions,mixins,status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from .models import Post,Vote
from.serializers import PostSerializers, VoteSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.db import IntegrityError
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.http import JsonResponse



# Create your views here.

class PostListView(generics.ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializers
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self,serializer):
        serializer.save(poster=self.request.user)
        
class VoteCreate(generics.CreateAPIView):
    serializer_class=VoteSerializer
    permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        post=Post.objects.get(pk=self.kwargs['pk'])
        return Vote.objects.filter(voter=user,post=post)

    def perform_create(self, serializer):
        if self.get_queryset().exists():
            raise ValidationError('You have already voted for this post')
        serializer.save(voter=self.request.user,post=Post.objects.get(pk=self.kwargs['pk']))

    def delete(self,request,*args,**kwargs):
        if self.get_queryset().exists():
            self.get_queryset().delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            raise ValidationError('You never voted for this post .............')

class PostRetrieveDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializers
    permission_classes=[permissions.IsAuthenticated]

    def delete(self,request,*args,**kwargs):
        post=Post.objects.filter(pk=self.kwargs['pk'],poster=self.request.user)
        if post.exists():
            return self.destroy(request,*args,**kwargs)
        else:
            raise ValidationError('you are not authorize to delete this post')


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data=JSONParser().parse(request)
            user=User.objects.create_user(username=data['username'],password=data['password'])
            user.save()
            token=Token.objects.create(user=user)
            return JsonResponse({'token':str(token)},status=201)
        except IntegrityError:
            return JsonResponse({'error':'The username you are trying has already been taken'},status=400)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)
        user=authenticate(request,username=data['username'],password=data['password'])
        if user is None:
            return JsonResponse({'error':'please provide correct credentials'},status=400)
        else:
            try:
                token=Token.objects.get(user=user)
            except:
                token=Token.objects.create(user=user)
            return JsonResponse({'token':str(token)},status=200)


