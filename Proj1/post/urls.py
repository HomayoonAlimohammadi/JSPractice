from django.urls import path
from .views import *

app_name = 'post'
urlpatterns = [
    path('', index_view, name='index'),

    # API Views
    path('load/', load, name='load')
]