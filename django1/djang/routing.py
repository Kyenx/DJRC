from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('ws/notes', consumers.NoteConsumer) #path client uses to connect to consumer
]