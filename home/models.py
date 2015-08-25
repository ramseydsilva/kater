from django.core.urlresolvers import reverse
from django.db import models
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models import PointField
from django.contrib.sites.models import Site
from ckeditor.fields import RichTextField
from cities.models import City, Country
from utils.models import get_unique_slug


class Navigation(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    url = models.CharField(null=True, blank=True, max_length=200)
    order = models.IntegerField(default=0)
    published = models.BooleanField(default=True)
    content = RichTextField(null=True, blank=True)

    class Meta:
        ordering = ('order', 'title',)

    def get_absolute_url(self):
        return "/%s" %(self.slug)

    def __unicode__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    subject = models.CharField(max_length=500)
    message = models.TextField()
    replied = models.BooleanField(default=False)
    created_by = models.ForeignKey('auth.User', null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return "%s - %s" % (self.name, self.email)

class Category(models.Model):
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=50, unique=True)
    order = models.IntegerField(null=True, blank=True)
    parent = models.ForeignKey("self", null=True, blank=True, related_name="children")

    class Meta:
        ordering = ('order', 'title',)
        verbose_name_plural = 'Categories'

    def __unicode__(self):
        return self.title

def get_item_image(instance, filename):
    return "items/%s/%s/%s" %(instance.caterer.name, instance.title, filename)

class CatererGallery(models.Model):
    caterer = models.ForeignKey("Caterer", related_name="gallery")
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to=get_item_image, null=True, blank=True)

class ItemCategory(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="item-categories", null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __unicode__(self):
        return self.title

class Item(models.Model):
    caterer = models.ForeignKey("Caterer")
    category = models.ForeignKey("ItemCategory", related_name="items")
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to=get_item_image, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    description = models.TextField(null=True, blank=True)

    def __unicode__(self):
        return self.title

class Rating(models.Model):
    food = models.PositiveIntegerField(default=0)
    service = models.PositiveIntegerField(default=0)
    ambience = models.PositiveIntegerField(default=0)
    value = models.PositiveIntegerField(default=0)
    recommend_to_friends = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return "%d" %(self.overall)

    @property
    def overall(self):
        return (self.food + self.service + self.ambience + self.value)/4

    def save(self, *args, **kwargs):
        self.overall = (self.food + self.service + self.ambience + self.value)/4
        super(Rating, self).save(*args, **kwargs)

class Review(models.Model):
    user = models.ForeignKey("auth.User", null=True, blank=True)
    caterer = models.ForeignKey("Caterer")
    rating = models.ForeignKey("Rating", null=True, blank=True)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.CharField(max_length=100)
    mobile_number = models.CharField(max_length=20)
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=True)

    def __unicode__(self):
        return self.title or self.description[:50]

class Area(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City)
    point = PointField(null=True, blank=True)

    def __unicode__(self):
        return self.name

class Address(models.Model):
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=300, null=True, blank=True)
    mobile_number = models.CharField(max_length=20, null=True, blank=True)
    street_address1 = models.CharField(max_length=300, null=True, blank=True)
    street_address2 = models.CharField(max_length=300, null=True, blank=True)
    area = models.ForeignKey("Area", null=True, blank=True)
    zip_code = models.CharField(max_length=10, null=True, blank=True)
    point = PointField(null=True, blank=True)

    def __unicode__(self):
        return "%s %s" %(self.street_address1, self.area)

class Caterer(models.Model):
    name = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    description = models.TextField(null=True, blank=True)
    all_female_servers = models.BooleanField(default=False)
    arabic_speaking_only = models.BooleanField(default=False)
    rating = models.ForeignKey(Rating)
    price = models.IntegerField(default=0)
    capacity = models.IntegerField(default=0)
    area = models.ForeignKey("Area", null=True, blank=True)
    address = models.ForeignKey("Address", null=True, blank=True)
    category = models.ForeignKey("Category", null=True, blank=True)
    image = models.ImageField(upload_to='caterers', null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("caterer", args=[self.slug])

    def save(self, password=False):
        if not self.slug:
            self.slug = get_unique_slug(Slug, self.name)

        super(Caterer, self).save()

class OrderItem(models.Model):
    item = models.ForeignKey("Item")
    quantity = models.IntegerField(default=1)

    def __unicode__(self):
        return self.item + " - " + self.quantity

class Order(models.Model):
    items = models.ManyToManyField("OrderItem", blank=True)
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey("auth.User", null=True, blank=True)
    discount = models.IntegerField(default=0)
    grand_total = models.IntegerField(default=0)
    special_request = models.TextField(null=True, blank=True)
    billing_address = models.ForeignKey(Address)
    paid = models.BooleanField(default=False)

    @property
    def total(self):
        return sum([i.price for i in self.items.all()])

class AddressBook(models.Model):
    profile = models.ForeignKey("Profile")
    address = models.ForeignKey("Address")
    name = models.CharField(max_length=30)

class Occupation(models.Model):
    title = models.CharField(max_length=50)

    def __unicode__(self):
        return self.title

SEX_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female')
)

PAYMENT_METHODS = (
    ('Cash', 'Cash on Delivery'),
    ('CC', 'Credit Card')
)

class Profile(models.Model):
    user = models.OneToOneField("auth.User", related_name="profile")
    mobile_number = models.CharField(max_length=20, null=True, blank=True)
    other_number = models.CharField(max_length=20, null=True, blank=True)
    birthday = models.DateTimeField(null=True, blank=True)
    occupation = models.CharField(max_length=30, null=True, blank=True)
    sex = models.CharField(max_length=10, choices=SEX_CHOICES, null=True, blank=True)
    subscribe_newsletter = models.BooleanField(default=False)
    send_sms = models.BooleanField(default=False)
    billing_address = models.ForeignKey("Address", null=True, blank=True, related_name="billing_profile")
    addresses = models.ManyToManyField("Address", through="AddressBook", related_name="profile")
    payment_method = models.CharField(max_length=10, choices=PAYMENT_METHODS, default="Cash")

models.BooleanField(default=False).contribute_to_class(City, 'published')
