# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='site',
            name='address',
            field=models.CharField(max_length=200, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='email',
            field=models.EmailField(max_length=200, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='facebook_page',
            field=models.URLField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='footer',
            field=ckeditor.fields.RichTextField(default=b"<p text='center'>Copyright &copy; 2015 Site, All rights reserved</p>", null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='google_analytics_code',
            field=models.CharField(max_length=10, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='googleplus_page',
            field=models.URLField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='mobile',
            field=models.CharField(max_length=20, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='phone',
            field=models.CharField(max_length=20, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='show_address',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='site',
            name='show_footer',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='site',
            name='show_social_links',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='site',
            name='show_user_login',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='site',
            name='title',
            field=models.CharField(default=b'Site Title', max_length=50),
        ),
        migrations.AddField(
            model_name='site',
            name='twitter_page',
            field=models.URLField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='site',
            name='youtube_page',
            field=models.URLField(null=True, blank=True),
        ),
    ]
