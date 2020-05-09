from django.contrib.auth import authenticate
from django.conf import settings
from rest_framework import serializers
import jwt


def generate_jwt(data):
    token = jwt.encode(data, settings.SECRET_KEY, 'HS256').decode('utf-8')
    return token


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def login(self):
        user = authenticate(
            username=self.validated_data['email'],
            password=self.validated_data['password']
        )
        if user is None:
            return None
        
        token = generate_jwt({'id': user.id, 'email': user.email})
        return token
        