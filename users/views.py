from django.shortcuts import render_to_response, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.core.urlresolvers import reverse
from django.template import RequestContext
from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.conf import settings
from .models import *
from utils import redirect
from utils.breadcrumbs import *


def login_view(request, message="", username=""):
    next = request.REQUEST.get('next', reverse('index'))
    if not request.user.is_anonymous():
        return redirect(request, url=next)
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user and user.is_active:
            login(request, user)
            return redirect(request)
        elif not user:
            message = "Incorrect username/password."
        elif not user.is_active:
            message = "That user has been deactivated."
    context ={
        'message' : message,
        'next' : next,
        'username': username,
        'breadcrumbs': login_breadcrumbs(next=next)
    }
    return render_to_response("users/login.html", context, context_instance = RequestContext(request))

def register_view(request, message="", username="", email="", first_name="", last_name=""):
    next = request.REQUEST.get('next', reverse('index'))
    if not request.user.is_anonymous():
        return redirect(request, url=next)
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        if username and password:
            if User.objects.filter(username=username).exists():
                message = "That username is taken"
            else:
                user = User.objects.create_user(username, email, password, first_name=first_name, last_name=last_name)
                user = authenticate(username=username, password=password)
                login(request, user)
                return redirect(request)
        else:
            message = "Both username nd password are required."
    context ={
        'message' : message,
        'next' : next,
        'username': username,
        'email': email,
        'first_name': first_name,
        'last_name': last_name,
        'breadcrumbs': register_breadcrumbs(next=next)
    }
    return render_to_response("users/register.html", context, context_instance = RequestContext(request))

def logout_view(request):
    logout(request)
    return redirect(request)

def profile(request, username):
    this_user = get_object_or_404(User, username=username)
    context = {
        'this_user': this_user,
        'breadcrumbs': profile_breadcrumbs(this_user)
    }
    return render_to_response("users/profile.html", context, context_instance = RequestContext(request))