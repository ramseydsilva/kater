from django.db import models
from django.contrib.sites.models import Site
from ckeditor.fields import RichTextField


class Navigation(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    url = models.URLField(null=True, blank=True, max_length=200)
    order = models.IntegerField(default=0)
    published = models.BooleanField(default=True)
    content = RichTextField(null=True, blank=True)

    class Meta:
        ordering = ('order', 'title',)

    def __unicode__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    subject = models.CharField(max_length=500)
    message = models.TextField()
    replied = models.BooleanField(default=False)
    created_by = models.ForeignKey('auth.User', null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return "%s - %s" % (self.name, self.email)


models.CharField(default='Site Title', max_length=50).contribute_to_class(Site, 'title')
models.CharField(null=True, blank=True,  max_length=10).contribute_to_class(Site, 'google_analytics_code')
RichTextField(default="<p text='center'>Copyright &copy; 2015 Site, All rights reserved</p>", null=True, blank=True) \
        .contribute_to_class(Site, 'footer')

# Social
models.URLField(null=True, blank=True, max_length=200).contribute_to_class(Site, 'facebook_page')
models.URLField(null=True, blank=True, max_length=200).contribute_to_class(Site, 'twitter_page')
models.URLField(null=True, blank=True, max_length=200).contribute_to_class(Site, 'googleplus_page')
models.URLField(null=True, blank=True, max_length=200).contribute_to_class(Site, 'youtube_page')

# Contact
models.CharField(null=True, blank=True,  max_length=200).contribute_to_class(Site, 'address')
models.CharField(null=True, blank=True, max_length=20).contribute_to_class(Site, 'phone')
models.CharField(null=True, blank=True, max_length=20).contribute_to_class(Site, 'mobile')
models.EmailField(null=True, blank=True, max_length=200).contribute_to_class(Site, 'email')

models.BooleanField(default=True).contribute_to_class(Site, 'show_social_links')
models.BooleanField(default=True).contribute_to_class(Site, 'show_footer')
models.BooleanField(default=True).contribute_to_class(Site, 'show_user_login')
models.BooleanField(default=True).contribute_to_class(Site, 'show_address')
