from django.contrib.auth.models import User
from rest_framework import serializers
from cities.models import City
from .models import Category, Job



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'slug', 'order', 'parent')

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        exclude = ('location',)
        read_only_fields = ('user',)

class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
