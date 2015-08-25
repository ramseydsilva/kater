from django.conf.urls import include, url, patterns
from .views import AppView


urlpatterns = [
    url(r'^$', AppView.as_view(), name='home'),

    url(r'^profile/$', AppView.as_view(), name='profile'),
    url(r'^logout/$', AppView.as_view(), name='logout'),
    url(r'^login/$', AppView.as_view(), name='login'),

    url(r'^place-order/$', AppView.as_view(), name='place-order'),
    url(r'^my-cart/$', AppView.as_view(), name='my-cart'),
    url(r'^checkout/$', AppView.as_view(), name='checkout'),
    url(r'^about-us/$', AppView.as_view(), name='about-us'),
    url(r'^privacy-policy/$', AppView.as_view(), name='privacy-policy'),
    url(r'^terms-and-conditions/$', AppView.as_view(), name='terms-and-conditions'),
    url(r'^get-in-touch/$', AppView.as_view(), name='contact-us'),

    url(r'^caterers/$', AppView.as_view(), name='caterers'),
    url(r'^caterers/(?P<slug>[-\w]+)/$', AppView.as_view(), name='caterer'),
    url(r'^caterers/(?P<slug>[-\w]+)/order/$', AppView.as_view(), name='caterer-order')
]
