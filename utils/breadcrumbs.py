from django.core.urlresolvers import reverse

def get_breadcrumb(text, url='', cls="", active=False):
    if active:
        cls += " active"
    return {
        'class': cls,
        'url': url,
        'text': text
    }

def home_breadcrumbs(active=True):
    breadcrumbs = []
    breadcrumbs.append(get_breadcrumb("Home", url=reverse("index"), cls="fa fa-home pr-10"))
    return breadcrumbs

def profile_breadcrumbs(user, active=True):
    breadcrumbs = home_breadcrumbs()
    breadcrumbs.append(get_breadcrumb(user.username, user.userprofile.get_absolute_url(), active=active))
    return breadcrumbs

def login_breadcrumbs(active=True, next="/"):
    breadcrumbs = home_breadcrumbs()
    breadcrumbs.append(get_breadcrumb("Login", "%s?next=%s" %(reverse("login"), next), active=active))
    return breadcrumbs

def register_breadcrumbs(active=True, next="/"):
    breadcrumbs = home_breadcrumbs()
    breadcrumbs.append(get_breadcrumb("Sign up", "%s?next=%s" %(reverse("register"), next), active=active))
    return breadcrumbs