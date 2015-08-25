from django.contrib.gis.geos import Point
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.decorators import permission_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import list_route, detail_route
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.filters import DjangoFilterBackend
import django_filters
from models import *
from serializers import *


class AreaViewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
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

class CatererFilter(django_filters.FilterSet):
    price_min = django_filters.NumberFilter(name="price", lookup_type="gte")
    price_max = django_filters.NumberFilter(name="price", lookup_type="lte")
    capacity_min = django_filters.NumberFilter(name="capacity", lookup_type="gte")
    capacity_max = django_filters.NumberFilter(name="capacity", lookup_type="lte")

    class Meta:
        model = Caterer
        fields = ['slug', 'category', 'area', 'price', 'capacity', 'all_female_servers', 'arabic_speaking_only']

class CatererViewSet(viewsets.ModelViewSet):
    queryset = Caterer.objects.all()
    serializer_class = CatererSerializer 
    filter_backends = (DjangoFilterBackend,)
    filter_class = CatererFilter

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewView(generics.CreateAPIView, APIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(caterer=self.request.query_params.get('pk', None))

    def get(self, *args, **kwargs):
        qs = Review.objects.filter(caterer=kwargs["pk"])
        serializer = ReviewSerializer(qs, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        if len(request.data['rating']):
            print serializer.data
            review = Review.objects.get(id=serializer.data["id"])
            rating = Rating(food=request.data['rating'][0]['food'], service=request.data['rating'][0]['service'], \
                                ambience=request.data['rating'][0]['ambience'], value=request.data['rating'][0]['value'])
            rating.save()
            review.rating = rating
            review.save()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class MenuView(APIView):
    serializer_class = ItemCategorySerializer

    def get_queryset(self):
        caterer_id = self.request.query_params.get('pk', None)
        return Item.objects.filter(caterer=caterer_id)

    def get(self, *args, **kwargs):
        items = Item.objects.filter(caterer=kwargs["pk"])
        item_category_ids = []
        for item in items:
            if item.category.id not in item_category_ids:
                item_category_ids.append(item.category.id)
        item_categories = ItemCategory.objects.filter(id__in=item_category_ids)
        for cat in item_categories:
            cat.caterer = kwargs["pk"]
        serializer = ItemCategorySerializer(item_categories, many=True)
        return Response(serializer.data)

class LoginView(APIView):
    queryset = User.objects.filter(is_active=True)

    def get(self, request, format=None):
        user = User.objects.filter(username=request.META.get("HTTP_XUSERNAME")).first()
        if user and user.is_active:
            user.backend = 'django.contrib.auth.backends.ModelBackend'
            user.check_password(request.META.get("HTTP_XPASSWORD"))
            login(request, user)
        serializer = UserSerializer(request.user)
        if (request.user.is_anonymous()):
            return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(serializer.data)

class RegisterView(APIView):
    queryset = User.objects.filter(is_active=True)
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        error = ""
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        email = request.POST.get("email")
        mobile_number = request.POST.get("mobile_number")
        street_address1 = request.POST.get("street_address1")
        street_address2 = request.POST.get("street_address2")
        area = request.POST.get("area")
        username = request.POST.get("username")
        password = request.POST.get("password")

        if not (first_name and last_name and email and mobile_number and street_address1 and street_address2 \
                and area and username and password):
            error = "All fields are required."
        elif User.objects.filter(username=username).exists():
            error = "That username is taken."

        if error:
            return Response({'error': error}, status=status.HTTP_400_BAD_REQUEST)
        else:
            user = User.objects.create_user(username, email, password, first_name=first_name, last_name=last_name)
            user = authenticate(username=username, password=password)
            user.backend = 'django.contrib.auth.backends.ModelBackend'
            login(request, user)
            serializer = UserSerializer(request.user)
            return Response(serializer.data)

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated, IsOwner)

    def get_object(self):
        return self.request.user.profile

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, IsOwner)

    def get_object(self):
        return self.request.user

class BillingView(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = (IsAuthenticated, )

    def get_object(self):
        return self.request.user.profile.billing_address

class LogoutView(APIView):
    queryset = User.objects.filter(is_active=True)

    def get(self, request, format=None):
        logout(request)
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


