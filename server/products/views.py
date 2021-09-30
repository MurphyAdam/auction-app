from .serializers import (CategorySerializer, ProductSerializer)
from auction_server.permissions import IsOwnerOrAdminOrReadOnly
from rest_framework import viewsets
from .models import Product, Category


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def get_queryset(self):
        return Product.objects.all().order_by('-id')


class ProductByCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def get_queryset(self):
        params = self.request.query_params
        category = params.get('category', None)
        return Product.objects.filter(category__slug=category).order_by('-id')


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """

    def get_queryset(self):
        return Category.objects.all()

    serializer_class = CategorySerializer
