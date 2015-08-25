from django.contrib.sitemaps import Sitemap
from django.core.urlresolvers import reverse
from django.contrib.flatpages.sitemaps import FlatPageSitemap
from home.models import Navigation, Caterer

class CatererSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.6

    def items(self):
        return Caterer.objects.all()

class NavigationSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.7

    def items(self):
        return Navigation.objects.filter(published=True)

class AppSitemap(Sitemap):
    priority = 0.5
    changefreq = "monthly"

    def items(self):
        return ['home', 'profile', 'logout', 'login', 'contact-us', 'caterers']

    def location(self, item):
        return reverse(item)


sitemaps = {
    'navigation': NavigationSitemap,
    'caterer': CatererSitemap,
    'app': AppSitemap
}
