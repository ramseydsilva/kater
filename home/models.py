from django.db import models
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models import PointField
from django.contrib.sites.models import Site
from ckeditor.fields import RichTextField
from cities.models import City


class Navigation(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    url = models.CharField(null=True, blank=True, max_length=200)
    order = models.IntegerField(default=0)
    published = models.BooleanField(default=True)
    content = RichTextField(null=True, blank=True)

    class Meta:
        ordering = ('order', 'title',)

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

    def __unicode__(self):
        return self.title

CURRENCY_CHOICES = (
    ("INR", "INR"),
    ("USD", "USD"),
    ("CAD", "CAD")
)

class Job(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=20, choices=CURRENCY_CHOICES, default="INR")
    number = models.PositiveIntegerField(default=1)
    address = models.CharField(max_length=400)
    location = PointField()
    latitude = models.CharField(max_length=20, null=True, blank=True)
    longitude = models.CharField(max_length=20, null=True, blank=True)
    city = models.ForeignKey(City)
    category = models.ForeignKey(Category)
    skills = models.ManyToManyField(Category, related_name="skill_jobs")
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('auth.User')

    class Meta:
        ordering = ('-date', )

    def __unicode__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.location and self.latitude and self.longitude:
            self.location = Point(float(self.latitude), float(self.longitude))

        super(Job, self).save(*args, **kwargs)

models.BooleanField(default=False).contribute_to_class(City, 'published')
