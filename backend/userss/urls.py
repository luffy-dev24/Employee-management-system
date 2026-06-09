from django.urls import path
from .views import *
from rest_framework_simplejwt.views import  TokenRefreshView


urlpatterns = [
    path("register/" , RegisterUserAlongWithCompany.as_view() , name="register"),
    # urls.py
    path('login/', EmailTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]