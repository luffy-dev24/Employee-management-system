from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employees
from .serializer import EmployeesSerializer
from rest_framework import status
# Create your views here.
class AddEmployee(APIView):
    def get(self,request):
        employees = Employees.objects.all()
        serializer_obj = EmployeesSerializer(employees,many=True)
        return Response(serializer_obj.data,status=status.HTTP_200_OK)
    

    def post(self,request):
        serializer_obj  = EmployeesSerializer(data=request.data)
        if serializer_obj.is_valid():
            serializer_obj.save()
            return Response(serializer_obj.data,status=status.HTTP_201_CREATED)
        return Response(serializer_obj.errors,status=status.HTTP_400_BAD_REQUEST)

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