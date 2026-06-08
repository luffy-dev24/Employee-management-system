from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Company
from .serializer import UserSerializer, CompanySerializer

# Create your views here.
class RegisterUserAlongWithCompany(APIView):
    def get(self , request):
        return Response({"message": "Welcome to the registration endpoint. Please send a POST request with your details to register."})

    def post(self, request):
        company_name = request.data['company_name']
        company_obj = CompanySerializer(data={'name': company_name})
        if company_obj.is_valid():
            company = company_obj.save()
        else:
            return Response(company_obj.errors, status=400)
        
        user_data = {
            "name": request.data["name"],
            "email": request.data["email"],
            "password": request.data["password"],
            "role" : "founder",
            "company": company.id
        }
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=201)
        else:
            return Response(user_serializer.errors, status=400)
