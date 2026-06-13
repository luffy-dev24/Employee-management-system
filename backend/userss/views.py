from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Company
from .serializer import UserSerializer, CompanySerializer

# Create your views here.
from django.db import transaction

class RegisterUserAlongWithCompany(APIView):
    def get(self, request):
        return Response({"message": "Welcome! Send a POST request to register."})

    def post(self, request):
        company_serializer = CompanySerializer(data={'name': request.data['company']})
        if not company_serializer.is_valid():
            return Response(company_serializer.errors, status=400)

        with transaction.atomic():
            company = company_serializer.save()

            user_data = {
                "name": request.data["name"],
                "email": request.data["email"],
                "password": request.data["password"],
                "role": "founder",
                "company_id": company.id        # ✅
            }

            user_serializer = UserSerializer(data=user_data)
            if not user_serializer.is_valid():
                return Response(user_serializer.errors, status=400)
                # company creation rolls back automatically ✅

            user_serializer.save()
            return Response(user_serializer.data, status=201)



# views.py
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import EmailTokenObtainPairSerializer

class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer