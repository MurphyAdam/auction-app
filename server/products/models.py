from decimal import Decimal
from django.db import models
from django.utils.text import slugify
from django.core.validators import MinValueValidator
from rest_framework.reverse import reverse


class Category(models.Model):
    name = models.CharField(
        max_length=100, blank=False)
    slug = models.SlugField(max_length=100, blank=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = "categories"

    def get_absolute_url(self):
        return reverse('category-detail', args=[self.id])

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name} (id {self.id})'


class Product(models.Model):
    title = models.CharField(max_length=127)
    slug = models.CharField(max_length=127, blank=True)
    description = models.CharField(max_length=4048)
    min_bid = models.DecimalField(max_digits=10, decimal_places=2, validators=[
        MinValueValidator(Decimal('10.00'))], default=Decimal('10.00'), blank=True)
    bid = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, null=False)
    poster = models.ImageField(
        blank=False, null=False, upload_to="products-images/")
    category = models.ForeignKey(
        'Category', null=True, blank=True, on_delete=models.CASCADE)
    expires_in = models.DateTimeField(null=True, blank=True)

    @property
    def last_bid_value(self):
        return self.bid

    def last_bid(self):
        return self.get_last_bid()

    def get_last_bid(self):
        return self.bids.order_by("-created").last()

    def increase_bid(self, bid):
        self.last_bid = bid
        self.save()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Product, self).save(*args, **kwargs)
