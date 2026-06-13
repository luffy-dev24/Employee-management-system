from rest_framework import serializers
from .models import Employees

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'
        
    def validate(self, data):
        if data['age']<18:
            raise serializers.ValidationError("age must be greater than 18")
        if data['salary']<0:
            raise serializers.ValidationError("salary must be greater than 0")
        return data

