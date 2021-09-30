from django.urls import path
from .views import api_root
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', api_root),
]

urlpatterns = format_suffix_patterns(urlpatterns)
