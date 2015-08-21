# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_category_slug'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ('order', 'title')},
        ),
        migrations.AddField(
            model_name='category',
            name='order',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
