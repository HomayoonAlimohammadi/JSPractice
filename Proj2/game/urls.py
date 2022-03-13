from django.urls import path
from .views import *

app_name = 'game'
urlpatterns = [
    path('', index_view, name='index')
]