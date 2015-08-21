# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cities', '0002_city_published'),
        ('home', '0004_auto_20150818_1421'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('hourly_rate', models.DecimalField(max_digits=10, decimal_places=2)),
                ('currency', models.CharField(default=b'INR', max_length=20, choices=[(b'INR', b'INR'), (b'USD', b'USD'), (b'CAD', b'CAD')])),
                ('numberPeople', models.PositiveIntegerField(default=1)),
                ('address', models.CharField(max_length=400)),
                ('location', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('latitude', models.CharField(max_length=20)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(to='home.Category')),
                ('city', models.ForeignKey(to='cities.City')),
                ('skills', models.ManyToManyField(related_name='skill_jobs', to='home.Category')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
