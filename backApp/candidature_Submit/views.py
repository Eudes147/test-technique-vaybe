from django.shortcuts import render

from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from .models import Application
from .serializers import ApplicationSerializer
from .scoring import calculate_score

class ApplicationListCreateView(APIView):

    def get_authenticators(self):
        if self.request.method == 'GET':
            return [TokenAuthentication()]
        return []  # Pas d'auth pour POST

    def get_permissions(self):
        if self.request.method == 'GET':
            return [IsAuthenticated()]
        return []  # Pas de permission pour POST

    # POST /applications/ — ouvert à tous
    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            score = calculate_score(request.data)
            serializer.save(score=score)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("ERREURS :", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET /applications/ — admin uniquement
    def get(self, request):
        queryset = Application.objects.all().order_by('-created_at')
        serializer = ApplicationSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class AdminLoginView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None and user.is_staff:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'message': 'Connexion réussie'
            }, status=status.HTTP_200_OK)

        return Response({
            'error': 'Identifiants invalides'
        }, status=status.HTTP_401_UNAUTHORIZED)

