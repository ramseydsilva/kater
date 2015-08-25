# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20150825_0719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='occupation',
            field=models.CharField(max_length=30, null=True, blank=True),
        ),
    ]
