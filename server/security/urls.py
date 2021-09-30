from django.urls import path
from security.views import get_csrf_token, CheckAuth

urlpatterns = [
    path('get-csrf/', get_csrf_token, name='get-CSRF'),
    path('current_user/', CheckAuth.as_view(), name='check-auth')
]
