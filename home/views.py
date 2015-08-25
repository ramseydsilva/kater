from django.views.generic import TemplateView, CreateView
from django.shortcuts import get_object_or_404
from django.core.urlresolvers import reverse
from .models import *
from .forms import *
from utils import AjaxableResponseMixin
from django.views.decorators.csrf import csrf_exempt


class AppView(TemplateView):
    template_name = "home/index.html"

    def get_context_data(self, **kwargs):
        context = super(AppView, self).get_context_data(**kwargs)
        return context
