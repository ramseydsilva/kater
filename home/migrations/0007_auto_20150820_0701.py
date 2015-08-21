# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20150819_2144'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='longitude',
            field=models.CharField(max_length=20, null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='latitude',
            field=models.CharField(max_length=20, null=True, blank=True),
        ),
    ]
