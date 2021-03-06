
from decimal import Decimal
from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager
from hashlib import md5


class User(AbstractUser):
    """
    Custom user model with an email as unique identifier
    """
    email = models.EmailField('Email address', unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    funds = models.DecimalField(max_digits=10,
                                default=Decimal('200.00'),
                                decimal_places=3, blank=False, null=False)
    original_max_bid_amount = models.DecimalField(max_digits=10,
                                                  default=Decimal('120.00'),
                                                  decimal_places=3, blank=False, null=False)
    left_max_bid_amount = models.DecimalField(max_digits=10,
                                              default=Decimal('120.00'),
                                              decimal_places=3, blank=False, null=False)
    bid_alert_trigger = models.FloatField(
        default=30.0, blank=False, null=False)
    objects = CustomUserManager()

    def decrease_bid_amount_funds(self):
        if self.left_max_bid_amount > 0:
            self.left_max_bid_amount -= 1
            self.save()

    def update_settings(self, original_max_bid_amount, bid_alert_trigger):
        self.original_max_bid_amount = original_max_bid_amount
        self.left_max_bid_amount = original_max_bid_amount
        self.bid_alert_trigger = bid_alert_trigger
        self.save()

    @property
    def max_bid_amount_reached(self):
        used_bid_amount = self.original_max_bid_amount - self.left_max_bid_amount
        perc = (used_bid_amount / self.original_max_bid_amount) * 100
        return perc >= self.bid_alert_trigger or self.left_max_bid_amount == 0

    @property
    def links(self):
        return {'avatar': self.avatar(128), }

    def avatar(self, size: int = 128):
        digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return 'https://www.gravatar.com/avatar/{}?d=monsterid&s={}'.format(
            digest, size)

    def __str__(self):
        return self.email
