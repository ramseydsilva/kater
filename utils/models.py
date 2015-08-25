from django.utils.text import slugify
from django.db import models
import itertools


def get_unique_slug(Model, to_slug, filters={}):
    slug = slugify(to_slug.lower())
    slug = slug.replace("-", "_")
    for x in itertools.count(1):
        filters['slug__iexact'] = slug
        if not Model.objects.filter(**filters).exists():
            break
        slug = '%s_%d' %(to_slug, x)
    print slug
    return slug

class TitleModel(models.Model):
    title = models.CharField(max_length=50, unique=True)

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.title
