from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from django.conf import settings
from django.conf.urls import include, patterns
from django.template.response import TemplateResponse
from django.views.generic import TemplateView
from sitemaps import sitemaps


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^ckeditor/', include('ckeditor.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include('api.urls')),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
    url(r'^robots\.txt$', TemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    url(r'', include('home.urls')),
]

if settings.DEBUG:
    urlpatterns +=  patterns('', (r'^404/$', TemplateResponse, {'template': '404.html'})) + \
                    static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + \
                    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
