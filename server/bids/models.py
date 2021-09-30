from decimal import Decimal
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator
from products.models import Product


class Bids(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='bids',
                             on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='bids')
    amount = models.DecimalField(max_digits=10, decimal_places=2, validators=[
        MinValueValidator(Decimal('1.00'))], blank=False, null=False)
    version = models.IntegerField(default=1, blank=True, null=False)
    created = models.DateField(auto_now_add=True)

    # we use `version` here to handle concurency
    # we rely on "Optimistic Locking" where we check if the version we got back from the user
    # equals the one we currently have

    class Meta:
        ordering = ['created']
        verbose_name_plural = "bids"

    def upgrade_version(self):
        self.version = self.version + 1
        self.save()

    def externl_modification_occured(self, version):
        return self.version == version
