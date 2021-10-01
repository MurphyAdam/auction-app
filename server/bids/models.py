import uuid

from decimal import Decimal
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator
from products.models import Product


class Bid(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='bids',
                             on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='bids')
    amount = models.DecimalField(max_digits=10, decimal_places=3, validators=[
        MinValueValidator(Decimal('10.00'))], blank=False, null=False)
    version = models.UUIDField(default=uuid.uuid4(), blank=True, null=False)
    auto_bid = models.BooleanField(default=False, blank=True, null=False)
    created = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['created']

    # we use `version` here to handle possible concurrency issues
    # we rely on "Optimistic Locking" where we check if the version we got back from the user
    # equals the one we currently have

    def update_bid_amount(self, amount):
        self.amount = amount
        self.save()

    def update_auto_bid(self, boolean):
        self.auto_bid = boolean
        self.save()

    def external_modification_occured(self, version):
        return self.version == version

    def save(self, *args, **kwargs):
        self.version = uuid.uuid4()
        super(Bid, self).save(*args, **kwargs)
