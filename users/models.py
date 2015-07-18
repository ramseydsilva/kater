from django.db import models
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse

class Profile(models.Model):
    user = models.OneToOneField(User, related_name="userprofile")

    def __unicode__(self):
        return "%s" % (self.user)

    def get_absolute_url(self):
        return "%s" % (reverse("profile", args=[self.user.username]))