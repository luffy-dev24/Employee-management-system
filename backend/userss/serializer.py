from rest_framework import serializers
from .models import User  
from .models import Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True) #nested serializer to show company details in user response

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'role', 'company']
        read_only_fields = ['id']          # only id is read only
        extra_kwargs = {
            'password': {'write_only': True}  # password never shown in response
        }