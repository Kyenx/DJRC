from django.shortcuts import render

from rest_framework import generics

from . import models
from . import serializers

#To retrive data
class NoteList(generics.ListCreateAPIView): 
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer
# Create your views here.
