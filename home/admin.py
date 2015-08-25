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

class ReviewAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "user", "caterer", "date", "approved")
    list_filter = ("approved",)

class AddressAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'mobile_number', 'area', 'zip_code')
    list_filter = ('area', )

class OrderAdmin(admin.ModelAdmin):
    list_display = ("date", "user", "grand_total", "paid")
    list_filter = ("paid",)
    search_fields = ("user",)

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("item", "quantity")

class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "mobile_number", "birthday", "occupation", "sex", "subscribe_newsletter", "send_sms")

admin.site.register(Navigation, NavigationAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Area, AreaAdmin)
admin.site.register(Caterer, CatererAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(ItemCategory)
admin.site.register(Item)
admin.site.register(Address, AddressAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Profile, ProfileAdmin)
