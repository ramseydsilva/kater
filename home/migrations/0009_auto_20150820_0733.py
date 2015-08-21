# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_auto_20150820_0703'),
    ]

    operations = [
        migrations.RenameField(
            model_name='job',
            old_name='numberPeople',
            new_name='number',
        ),
    ]
