# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
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
            name='Navigation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
                ('order', models.IntegerField(default=0)),
                ('published', models.BooleanField(default=True)),
                ('content', ckeditor.fields.RichTextField(null=True, blank=True)),
            ],
            options={
                'ordering': ('order', 'title'),
            },
        ),
    ]
