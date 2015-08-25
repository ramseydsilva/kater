from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import permissions
from cities.models import City
from django.contrib.postgres.fields import ArrayField
from home.models import *


class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ('id', 'name', 'city')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ("food", "service", "ambience", "value", "overall")

class ReviewSerializer(serializers.ModelSerializer):
    rating = RatingSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ("id", "title", "caterer", "description", "first_name", "last_name", "date", "rating")

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('mobile_number', 'other_number', 'birthday', 'occupation', 'sex', \
                'subscribe_newsletter', 'send_sms')

    def get_object(self, view_name, view_args, view_kwargs):
        print self, view_name, view_args, view_kwargs
        lookup_kwargs = {}

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("id", "title", "price", "description", "image")

class ItemCategorySerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField('get_item')

    def get_item(self, obj):
        items = Item.objects.filter(caterer=obj.caterer)
        return ItemSerializer(items.filter(category=obj), many=True).data

    class Meta:
        model = ItemCategory
        fields = ('id', 'title', 'image', 'items')

class CatererImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatererGallery
        fields = ('title', 'image')

class CatererSerializer(serializers.ModelSerializer):
    gallery = CatererImageSerializer(many=True, read_only=True)

    class Meta:
        model = Caterer
        fields = ("id", "name", "slug", "description", "all_female_servers", "arabic_speaking_only", \
                    "rating", "price", "capacity", "area", "category", "image", \
                    "gallery")

class IsOwner(permissions.BasePermission):
    message = "Not allowed"

    def has_permission(self, request, view):
        return not request.user.is_anonymous()

    def has_object_permissions(self, request, obj):
        return obj.user == request.user
