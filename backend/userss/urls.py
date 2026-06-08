from django.urls import path
from .views import *

urlpatterns = [
    path("register/" , RegisterUserAlongWithCompany.as_view() , name="register")
]