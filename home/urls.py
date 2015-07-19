from django.conf.urls import include, url, patterns
from .views import HomeView, PageView, ContactView

urlpatterns = [
    url(r'^$', HomeView.as_view(), name='index'),
    url(r'^contact/$', ContactView.as_view(), name='contact'),
    url(r'^(?P<nav_slug>[-\w]+)/$', PageView.as_view(), name='page'),
]
