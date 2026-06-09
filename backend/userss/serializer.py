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
    def create(self, validated_data):
        return User.objects.create_user(
            name=validated_data["name"],
            email=validated_data["email"],
            role=validated_data["role"],
            password=validated_data["password"]
        )



from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate

class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'email'

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)  # get the default token first

        # 👇 now add your custom fields to the payload
        token['name'] = user.name
        token['email'] = user.email
        token['role'] = user.role

        return token

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")


        user = authenticate(
            request=self.context.get("request"),
            email=email,
            password=password
        )

        if not user:
            raise serializers.ValidationError("Invalid email or password.")
        
        token = self.get_token(user)

        data = {}
        data['access'] = str(token.access_token)   # 👈 access token with your fields
        data['refresh'] = str(token) 
        
        data["role"] = user.role
        data["email"] = user.email
        data["id"] = user.id
        return data