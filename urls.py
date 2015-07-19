from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import include, patterns
from django.template.response import TemplateResponse

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^ckeditor/', include('ckeditor.urls')),
    url(r'', include('home.urls')),
    url(r'', include('users.urls')),
]

if settings.DEBUG:
    urlpatterns +=  patterns('', (r'^404/$', TemplateResponse, {'template': '404.html'})) + \
                    static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + \
                    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)