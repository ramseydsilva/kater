from django.views.generic import TemplateView, CreateView
from django.shortcuts import get_object_or_404
from django.core.urlresolvers import reverse
from .models import *


class AppView(TemplateView):
    template_name = "home/index.html"

    def get_context_data(self, **kwargs):
        context = super(AppView, self).get_context_data(**kwargs)
        return context
