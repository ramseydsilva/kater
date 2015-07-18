from django.contrib.sites.shortcuts import get_current_site
from .models import Navigation

def main(request):
    return {
        'navigations': Navigation.objects.filter(published=True),
        'site': get_current_site(request)
    }
