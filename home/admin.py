from django.contrib.sites.admin import SiteAdmin
from django.contrib import admin
from .models import *

class NavigationAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'url', 'order', 'published')
    list_filter = ('published',)
    prepopulated_fields = {"slug": ("title",)}
    list_editable = ('slug', 'url', 'order', 'published')

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'email', 'replied')
    list_filter = ('replied',)
    list_editable = ('replied',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'parent')
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ('parent',)

admin.site.register(Navigation, NavigationAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Category, CategoryAdmin)
