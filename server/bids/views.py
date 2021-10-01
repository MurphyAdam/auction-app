from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import BidsSerializer
from .models import Bid
from auction_server.permissions import IsReadOnly
from products.models import Product


class BidViewSet(viewsets.ModelViewSet):
    serializer_class = BidsSerializer
    permission_classes = [IsAuthenticated | IsReadOnly]

    def get_queryset(self):
        return Bid.objects.all()

    def perform_create(self, serializer):
        data = self.request.data
        product_id = data.get('product_id', None)
        product = Product.objects.get(id=product_id)
        bid = Bid.objects.filter(
            user=self.request.user, product=product).first()
        serializer.save(user=self.request.user, product=product, bid=bid)
