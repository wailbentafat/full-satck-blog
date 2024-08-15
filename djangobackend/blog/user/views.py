from .serializer import signinserializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login


@api_view(["POST"])
def register(request):
    serializer = signinserializer(data=request.data)
    
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        
    if User.objects.filter(email=email).exists() :
        return Response({"ereur":"user exist"})
    
    
    
    user = User.objects.create_user(username=email, email=email, password=password)
    print("here ")
        
        # Login the user
    login(request, user)
        
        # Generate tokens
    refresh_token = RefreshToken.for_user(user)
    return Response({
            "refresh": str(refresh_token),
            "access": str(refresh_token.access_token)
        }, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "*"}, content_type="application/json")
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(["POST"])   
def signin(request):
    serializer = signinserializer(data=request.data)
    print("test1")
    if serializer.is_valid():
        try:
            user=User.objects.get(username=serializer.data.get("username")).first()
            if not user:
                return Response({"error": "user not found"}, status=status.HTTP_404_NOT_FOUND)
            if user.check_password(serializer.data.get("password")):
                refresh_token = RefreshToken.for_user(user)
                print(refresh_token)
                login(user)
                print(user.get_all_permissions())
                return Response({"refresh": str(refresh_token), "access": str(refresh_token.access_token) }, status=status.HTTP_200_OK, headers={"Access-Control-Allow-Origin": "*"}, content_type="application/json")
            else:
                return Response({"error": "wrong password"}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    
@api_view(["GET"])
@permission_classes([IsAuthenticated])    
def get(request):
    print('free')
    print(request.user)
    
    usera=request.user
   
    user={
        "email":usera.email
        
    }
    return Response({"user": user}, status=status.HTTP_200_OK)    