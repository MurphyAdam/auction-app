# Generated by Django 3.2.7 on 2021-10-02 22:02

from decimal import Decimal
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20211002_2046'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='max_bid_amount',
            new_name='left_max_bid_amount',
        ),
        migrations.AddField(
            model_name='user',
            name='original_max_bid_amount',
            field=models.DecimalField(decimal_places=3, default=Decimal('120.00'), max_digits=10),
        ),
    ]
