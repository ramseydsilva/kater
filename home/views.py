from django.views.generic import TemplateView, CreateView
from django.shortcuts import get_object_or_404
from django.core.urlresolvers import reverse
from .models import *
from .forms import *
from utils import AjaxableResponseMixin
from django.views.decorators.csrf import csrf_exempt


class HomeView(TemplateView):
    template_name = "home/index.html"

class PageView(TemplateView):
    template_name = "home/page.html"

    def get_context_data(self, **kwargs):
        context = super(PageView, self).get_context_data(**kwargs)
        context['navigation'] = get_object_or_404(Navigation, slug=self.kwargs['nav_slug'])
        return context

class ContactView(AjaxableResponseMixin, CreateView):
    template_name = 'home/contact.html'
    form_class = ContactForm
    model = Contact

    def get_context_data(self, **kwargs):
        context = super(ContactView, self).get_context_data(**kwargs)
        context['navigation'] = Navigation.objects.filter(slug='contact').first()
        context['success'] = "success" in self.request.GET
        return context

    def get_success_url(self):
        return "%s?success=True" % (reverse('contact'))

    def form_valid(self, form, **kwargs):
        if not self.request.user.is_anonymous():
            form.instance.created_by = self.request.user
        return super(ContactView, self).form_valid(form)
