from django.views.generic import TemplateView, CreateView
from django.core.urlresolvers import reverse
from .models import *
from .forms import *
from utils import AjaxableResponseMixin
from django.views.decorators.csrf import csrf_exempt


class HomeView(TemplateView):
    template_name = "home/index.html"

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        context['navigations'] = Navigation.objects.filter(published=True)
        context['form'] = ContactForm()
        return context

class ContactView(AjaxableResponseMixin, CreateView):
    template_name = 'home/contact.html'
    form_class = ContactForm
    model = Contact

    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        print self.request.POST
        return super(ContactView, self).dispatch(*args, **kwargs)

    def get_success_url(self):
        return "%s?success=True" % (reverse('contact'))

    def form_valid(self, form):
        if not self.request.user.is_anonymous():
            form.instance.created_by = self.request.user
        return super(ContactView, self).form_valid(form)
