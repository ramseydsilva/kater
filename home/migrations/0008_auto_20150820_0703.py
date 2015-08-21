# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_auto_20150820_0701'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='email',
        ),
        migrations.AlterField(
            model_name='job',
            name='user',
            field=models.ForeignKey(default=1, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
