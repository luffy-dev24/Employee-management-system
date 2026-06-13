from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employees
from .serializer import EmployeesSerializer
from rest_framework import status
from userss.models import Company , User
from userss.serializer import UserSerializer

# Create your views here.
class AddEmployee(APIView):
    def get(self,request):
        employees = Employees.objects.all()
        serializer_obj = EmployeesSerializer(employees,many=True)
        return Response(serializer_obj.data,status=status.HTTP_200_OK)
    

class UpdateEmployee(APIView):
    def get(self,request,pk):
        employee = Employees.objects.get(id=pk)
        serializer_obj = EmployeesSerializer(employee)
        return Response(serializer_obj.data,status=status.HTTP_200_OK)
    
    def put(self,request,pk):
        employee = Employees.objects.get(id=pk)
        serializer_obj = EmployeesSerializer(employee,data=request.data)
        if serializer_obj.is_valid():
            serializer_obj.save()
            return Response(serializer_obj.data,status=status.HTTP_200_OK)
        return Response(serializer_obj.errors,status=status.HTTP_400_BAD_REQUEST)
    
from django.db import transaction

class RegisterEmployeeAndADDEmployeeView(APIView):
    def post(self, request):
        user_obj = User.objects.get(id=request.data["user_id"])

        user_data = {
            "name": request.data.get("name"),
            "email": request.data.get("email"),
            "password": request.data.get("password"),
            "role": request.data.get("role"),
            "company_id": user_obj.company.id
        }

        s_obj = UserSerializer(data=user_data)

        if not s_obj.is_valid():
            print("USER SERIALIZER ERRORS:", s_obj.errors)
            return Response(s_obj.errors, status=status.HTTP_400_BAD_REQUEST)

        with transaction.atomic():
            new_user = s_obj.save()

            employee_data = {
                "user": new_user.id,
                "age": int(request.data.get("age")),         # ✅ cast to int
                "salary": float(request.data.get("salary")), # ✅ cast to float
                "profile_pic": request.FILES.get("profile_pic")
            }

            es_obj = EmployeesSerializer(data=employee_data)

            if not es_obj.is_valid():
                print("EMPLOYEE SERIALIZER ERRORS:", es_obj.errors)
                return Response(es_obj.errors, status=status.HTTP_400_BAD_REQUEST)

            es_obj.save()
            return Response(es_obj.data, status=status.HTTP_201_CREATED)