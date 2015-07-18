from django.contrib.sites.admin import SiteAdmin
from django.contrib import admin
from .models import *

class NavigationAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'order', 'published')
    list_filter = ('published',)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'email', 'replied')
    list_filter = ('replied',)

admin.site.register(Navigation, NavigationAdmin)
admin.site.register(Contact, ContactAdmin)
SiteAdmin.list_display = ('title', 'domain', )
