from django.conf.urls import include, url, patterns
from .views import *
from rest_framework import routers

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
    url(r'^', include(router.urls)),
    url(r'^logout/', LogoutView.as_view()),
    url(r'^login/', LoginView.as_view()),
    url(r'^register/', RegisterView.as_view()),
    url(r'^user/', UserView.as_view(PROFILE_ACTIONS)),
    url(r'^billing/', BillingView.as_view(BILLING_ACTIONS)),
    url(r'^profile/', ProfileView.as_view(PROFILE_ACTIONS)),
    url(r'^caterers/(?P<pk>[0-9]+)/menu/', MenuView.as_view()),
    url(r'^caterers/(?P<pk>[0-9]+)/reviews/', ReviewView.as_view()),
]
