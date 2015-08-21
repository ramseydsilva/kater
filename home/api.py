from django.contrib.gis.geos import Point
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import list_route, detail_route
from rest_framework.response import Response
from rest_framework.views import APIView
from serializers import *


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.filter(parent=None)
    serializer_class = CategorySerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.exclude(parent=None)
    serializer_class = CategorySerializer

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.filter(published=True)
    serializer_class = CitySerializer

    @list_route(methods=['get'])
    def get_nearest_city(self, request):
        queryset = self.get_queryset()
        to_return = queryset.none()
        latitude = self.request.GET.get("latitude")
        longitude = self.request.GET.get("longitude")
        if latitude and longitude:
            to_return = City.objects.distance(Point(float(latitude), float(longitude))).exclude(population__lte=1000000) \
                    .order_by('distance').first()
        serializer = self.get_serializer(to_return)
        return Response(serializer.data)

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class LoginView(APIView):
    queryset = User.objects.filter(is_active=True)

    def get(self, request, format=None):
        user = request.user
        if user and user.is_active:
            user.backend = 'django.contrib.auth.backends.ModelBackend'
            login(request, user)
        print user
        serializer = CurrentUserSerializer(request.user)
        return Response(serializer.data)

class LogoutView(APIView):
    queryset = User.objects.filter(is_active=True)

    def get(self, request, format=None):
        logout(request)
        serializer = CurrentUserSerializer(request.user)
        return Response(serializer.data)


class CurrentUserView(APIView):
    queryset = User.objects.filter(is_active=True)

    def get(self, request):
        serializer = CurrentUserSerializer(request.user)
        return Response(serializer.data)
