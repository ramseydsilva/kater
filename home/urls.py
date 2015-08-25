from django.conf.urls import include, url, patterns
from .views import HomeView, PageView, ContactView
from rest_framework import routers
from api import *

router = routers.DefaultRouter()

router.register(r'caterers', CatererViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'areas', AreaViewSet)

PROFILE_ACTIONS = {
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update'
}

BILLING_ACTIONS = {
    'post': 'create',
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update'
}

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/logout/', LogoutView.as_view()),
    url(r'^api/login/', LoginView.as_view()),
    url(r'^api/register/', RegisterView.as_view()),
    url(r'^api/user/', UserView.as_view(PROFILE_ACTIONS)),
    url(r'^api/billing/', BillingView.as_view(BILLING_ACTIONS)),
    url(r'^api/profile/', ProfileView.as_view(PROFILE_ACTIONS)),
    url(r'^api/caterers/(?P<pk>[0-9]+)/menu/', MenuView.as_view()),
    url(r'^api/caterers/(?P<pk>[0-9]+)/reviews/', ReviewView.as_view()),

    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^caterers/$', HomeView.as_view(), name='caterers'),
    url(r'^caterers/(?P<slug>[-\w]+)/$', HomeView.as_view(), name='caterer'),
    url(r'^caterers/(?P<slug>[-\w]+)/order/$', HomeView.as_view(), name='caterer-order'),
    url(r'^profile/$', HomeView.as_view(), name='profile'),
    url(r'^place-order/$', HomeView.as_view(), name='place-order'),
    url(r'^my-cart/$', HomeView.as_view(), name='my-cart'),
    url(r'^checkout/$', HomeView.as_view(), name='checkout'),
    url(r'^about-us/$', HomeView.as_view(), name='about-us'),
    url(r'^privacy-policy/$', HomeView.as_view(), name='privacy-policy'),
    url(r'^terms-and-conditions/$', HomeView.as_view(), name='terms-and-conditions'),
    url(r'^get-in-touch/$', HomeView.as_view(), name='contact-us'),

    url(r'^profile/$', HomeView.as_view(), name='profile'),
    url(r'^logout/$', HomeView.as_view(), name='logout'),
    url(r'^login/$', HomeView.as_view(), name='login'),
    url(r'^join/$', HomeView.as_view(), name='join'),
    url(r'^contact/$', ContactView.as_view(), name='contact'),
    url(r'^(?P<nav_slug>[-\w]+)/$', PageView.as_view(), name='page'),
]
