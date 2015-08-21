from django.conf.urls import include, url, patterns
from .views import HomeView, PageView, ContactView
from rest_framework import routers
from api import *

router = routers.DefaultRouter()

router.register(r'categories', CategoryViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'cities', CityViewSet)
router.register(r'jobs', JobViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/logout/', LogoutView.as_view()),
    url(r'^api/login/', LoginView.as_view()),
    url(r'^api/users/current/', CurrentUserView.as_view()),
    url(r'^$', HomeView.as_view(), name='index'),
    url(r'^profile/$', HomeView.as_view(), name='profile'),
    url(r'^logout/$', HomeView.as_view(), name='logout'),
    url(r'^login/$', HomeView.as_view(), name='login'),
    url(r'^join/$', HomeView.as_view(), name='join'),
    url(r'^jobs/$', HomeView.as_view(), name='jobs'),
    url(r'^jobs/new/$', HomeView.as_view(), name='jobs-new'),
    url(r'^jobs/new/review/$', HomeView.as_view(), name='jobs-new-review'),
    url(r'^jobs/new/submit/$', HomeView.as_view(), name='jobs-new-submit'),
    url(r'^jobs/(?P<pk>[0-9]+)/$', HomeView.as_view(), name='job'),
    url(r'^folks/$', HomeView.as_view(), name='folks'),
    url(r'^contact/$', ContactView.as_view(), name='contact'),
    url(r'^(?P<nav_slug>[-\w]+)/$', PageView.as_view(), name='page'),
]
