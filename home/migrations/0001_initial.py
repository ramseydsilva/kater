# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import home.models
import ckeditor.fields
import django.contrib.gis.db.models.fields
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '__first__'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('first_name', models.CharField(max_length=100, null=True, blank=True)),
                ('last_name', models.CharField(max_length=100, null=True, blank=True)),
                ('email', models.EmailField(max_length=300, null=True, blank=True)),
                ('mobile_number', models.CharField(max_length=20, null=True, blank=True)),
                ('street_address1', models.CharField(max_length=300, null=True, blank=True)),
                ('street_address2', models.CharField(max_length=300, null=True, blank=True)),
                ('zip_code', models.CharField(max_length=10, null=True, blank=True)),
                ('point', django.contrib.gis.db.models.fields.PointField(srid=4326, null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='AddressBook',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30)),
                ('address', models.ForeignKey(to='home.Address')),
            ],
        ),
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('point', django.contrib.gis.db.models.fields.PointField(srid=4326, null=True, blank=True)),
                ('city', models.ForeignKey(to='cities.City')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('slug', models.CharField(unique=True, max_length=50)),
                ('order', models.IntegerField(null=True, blank=True)),
                ('parent', models.ForeignKey(related_name='children', blank=True, to='home.Category', null=True)),
            ],
            options={
                'ordering': ('order', 'title'),
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Caterer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=300)),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField(null=True, blank=True)),
                ('all_female_servers', models.BooleanField(default=False)),
                ('arabic_speaking_only', models.BooleanField(default=False)),
                ('price', models.IntegerField(default=0)),
                ('capacity', models.IntegerField(default=0)),
                ('image', models.ImageField(null=True, upload_to=b'caterers', blank=True)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('address', models.ForeignKey(blank=True, to='home.Address', null=True)),
                ('area', models.ForeignKey(blank=True, to='home.Area', null=True)),
                ('category', models.ForeignKey(blank=True, to='home.Category', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='CatererGallery',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(null=True, upload_to=home.models.get_item_image, blank=True)),
                ('caterer', models.ForeignKey(related_name='gallery', to='home.Caterer')),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=200)),
                ('subject', models.CharField(max_length=500)),
                ('message', models.TextField()),
                ('replied', models.BooleanField(default=False)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(null=True, upload_to=home.models.get_item_image, blank=True)),
                ('price', models.DecimalField(default=0, max_digits=10, decimal_places=2)),
                ('description', models.TextField(null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='ItemCategory',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(null=True, upload_to=b'item-categories', blank=True)),
                ('description', models.TextField(null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Navigation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
                ('url', models.CharField(max_length=200, null=True, blank=True)),
                ('order', models.IntegerField(default=0)),
                ('published', models.BooleanField(default=True)),
                ('content', ckeditor.fields.RichTextField(null=True, blank=True)),
            ],
            options={
                'ordering': ('order', 'title'),
            },
        ),
        migrations.CreateModel(
            name='Occupation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('discount', models.IntegerField(default=0)),
                ('grand_total', models.IntegerField(default=0)),
                ('special_request', models.TextField(null=True, blank=True)),
                ('paid', models.BooleanField(default=False)),
                ('billing_address', models.ForeignKey(to='home.Address')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('quantity', models.IntegerField(default=1)),
                ('item', models.ForeignKey(to='home.Item')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('mobile_number', models.CharField(max_length=20, null=True, blank=True)),
                ('other_number', models.CharField(max_length=20, null=True, blank=True)),
                ('birthday', models.DateTimeField(null=True, blank=True)),
                ('occupation', models.CharField(max_length=30, null=True, blank=True)),
                ('sex', models.CharField(blank=True, max_length=10, null=True, choices=[(b'M', b'Male'), (b'F', b'Female')])),
                ('subscribe_newsletter', models.BooleanField(default=False)),
                ('send_sms', models.BooleanField(default=False)),
                ('payment_method', models.CharField(default=b'Cash', max_length=10, choices=[(b'Cash', b'Cash on Delivery'), (b'CC', b'Credit Card')])),
                ('addresses', models.ManyToManyField(related_name='profile', through='home.AddressBook', to='home.Address')),
                ('billing_address', models.ForeignKey(related_name='billing_profile', blank=True, to='home.Address', null=True)),
                ('user', models.OneToOneField(related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('food', models.PositiveIntegerField(default=0)),
                ('service', models.PositiveIntegerField(default=0)),
                ('ambience', models.PositiveIntegerField(default=0)),
                ('value', models.PositiveIntegerField(default=0)),
                ('recommend_to_friends', models.BooleanField(default=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('first_name', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=40)),
                ('email', models.CharField(max_length=100)),
                ('mobile_number', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=100, null=True, blank=True)),
                ('description', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('caterer', models.ForeignKey(to='home.Caterer')),
                ('rating', models.ForeignKey(blank=True, to='home.Rating', null=True)),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='items',
            field=models.ManyToManyField(to='home.OrderItem', blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.ForeignKey(related_name='items', to='home.ItemCategory'),
        ),
        migrations.AddField(
            model_name='item',
            name='caterer',
            field=models.ForeignKey(to='home.Caterer'),
        ),
        migrations.AddField(
            model_name='caterer',
            name='rating',
            field=models.ForeignKey(to='home.Rating'),
        ),
        migrations.AddField(
            model_name='addressbook',
            name='profile',
            field=models.ForeignKey(to='home.Profile'),
        ),
        migrations.AddField(
            model_name='address',
            name='area',
            field=models.ForeignKey(blank=True, to='home.Area', null=True),
        ),
    ]
