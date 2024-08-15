from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class signinserializer(serializers.Serializer):
   email = serializers.EmailField()
   password=serializers.CharField()



class signupserializer(serializers.Serializer):
    email = serializers.EmailField()
    password=serializers.CharField()
    
    
    def check_user(self):
        return User.objects.filter(email=self.validated_data['email']).exists()
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
   