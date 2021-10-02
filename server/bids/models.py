import uuid

from decimal import Decimal
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator
from django.db.models.signals import post_save
from products.models import Product
from django.db.models.signals import post_save
from django.dispatch import receiver


class Bid(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='bids',
                             on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='bids')
    amount = models.DecimalField(max_digits=10, decimal_places=3, validators=[
        MinValueValidator(Decimal('10.00'))], blank=False, null=False)
    version = models.UUIDField(default=uuid.uuid4(), blank=True, null=False)
    auto_bid = models.BooleanField(default=False, blank=True, null=False)
    last_bid_origin = models.CharField(max_length=10,
                                       default="native", blank=True, null=False)
    created = models.DateTimeField(auto_now_add=True, blank=True)
    updated = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        ordering = ['updated']

    # we use `version` here to handle possible concurrency issues
    # we rely on "Optimistic Locking" where we check if the version we got back from the user
    # equals the one we currently have

    def update_bid_amount(self, amount):
        self.amount = amount
        self.save()

    def update_auto_bid(self, boolean):
        self.auto_bid = boolean
        self.save()

    def get_auto_bidders(self):
        return self.objects.filter(auto_bid=True).all()

    def external_modification_occured(self, version):
        return self.version == version

    def save(self, *args, **kwargs):
        self.version = uuid.uuid4()
        super(Bid, self).save(*args, **kwargs)


@receiver(post_save, sender=Bid, dispatch_uid="auto_bid_bot")
def auto_place_bid(sender, instance, **kwargs):
    auto_bids = Bid.objects.filter(
        auto_bid=True, product=instance.product.id)
    outbid_amount = instance.amount + 1
    for bid in auto_bids:
        """
            The next time someone else makes a bid on the marked item, the bot should automatically
            outbid them by 1
            if bid.amount < instance.amount
            we don't touch the instances 
        """
        if not bid.user.max_bid_amount_reached:
            bid.amount = outbid_amount
            """
                # we set last_bid_origin to 'bot'
                # to avoid having differrent bots outbid each other infinitly
                bid.last_bid_origin = 'bot'
                """
            # outbid the last bid by 1
            outbid_amount += 1
            # decrease user max bid amount
            bid.user.decrease_bid_amount_funds()
            bid.save()


post_save.connect(auto_place_bid, sender=Bid)
