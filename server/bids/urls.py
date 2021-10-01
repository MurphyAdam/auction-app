from django.urls import path
from .views import BidViewSet
from rest_framework.urlpatterns import format_suffix_patterns

bid_list = BidViewSet.as_view({'get': 'list', 'post': 'create'})

bid_detail = BidViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
})

urlpatterns = [
    path('bids', bid_list, name='bids-list'),
    path('bids/<pk>', bid_detail, name='bid-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
