from django.contrib.sites.admin import SiteAdmin
from django.contrib import admin
from sorl.thumbnail.admin import AdminImageMixin
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

class AreaAdmin(admin.ModelAdmin):
    list_display = ('name', 'city')

class CatererImageInlineModelAdmin(AdminImageMixin, admin.TabularInline):
    model = CatererGallery

class CatererAdmin(admin.ModelAdmin):
    list_display = ('name', 'rating', 'all_female_servers', 'arabic_speaking_only')
    list_filter = ('all_female_servers', 'arabic_speaking_only')
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ('title',)
    inlines = [CatererImageInlineModelAdmin]

class RatingAdmin(admin.ModelAdmin):
    list_display = ('food', 'service', 'ambience', 'value', 'overall', 'recommend_to_friends')

admin.site.register(Navigation, NavigationAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Area, AreaAdmin)
admin.site.register(Caterer, CatererAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(Review)
admin.site.register(ItemCategory)
admin.site.register(Item)
