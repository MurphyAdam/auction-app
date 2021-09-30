from django.urls import path
from django.conf.urls import url
from .views import (ProductViewSet, CategoryViewSet, ProductByCategoryViewSet)
from rest_framework.urlpatterns import format_suffix_patterns

product_list = ProductViewSet.as_view({'get': 'list', 'post': 'create'})

product_detail = ProductViewSet.as_view({
    'get': 'retrieve',
})

product_slug_detail = ProductViewSet.as_view({
    'get': 'retrieve',
}, lookup_field='slug')

category_list = CategoryViewSet.as_view({
    'get': 'list'
})

category_detail = CategoryViewSet.as_view({
    'get': 'retrieve'
})

product_by_cat_list = ProductByCategoryViewSet.as_view({'get': 'list'})

urlpatterns = [
    path('products', product_list, name='product-list'),
    # 'products/by-category' comes first before r'products/(?P<slug>[-\w]+)$'
    # because the latter will match the former - which we don't want.
    path('products/by-category', product_by_cat_list,
         name='product-by-category-list'),
    url(r'products/(?P<pk>\d*)$', product_detail, name='product-detail'),
    url(r'products/(?P<slug>[-\w]+)$',
        product_slug_detail, name='product-slug-detail'),
    path('categories', category_list, name='category-list'),
    path('categories/<int:pk>', category_detail, name='category-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
