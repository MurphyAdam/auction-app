from django.urls import path
from users.views import UserViewSet
from rest_framework.urlpatterns import format_suffix_patterns

user_list = UserViewSet.as_view({
    'get': 'list',
    'put': 'update',
})

user_detail = UserViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
})

urlpatterns = [
    path('users', user_list, name='user-list'),
    path('users/<int:pk>', user_detail, name='user-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
