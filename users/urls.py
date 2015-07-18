from django.conf.urls import patterns, url

urlpatterns = patterns('users.views',

    url(r'^login/$', 'login_view', name='login'),
    url(r'^register/$', 'register_view', name='register'),
    url(r'^logout/$', 'logout_view', name='logout'),
    url(r'^user/(?P<username>[-\w]+)/$', 'profile', name='profile'),
)