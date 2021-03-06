# Generated by Django 3.2.7 on 2021-10-02 20:46

from decimal import Decimal
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20211002_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='funds',
            field=models.DecimalField(decimal_places=3, default=Decimal('200.00'), max_digits=10),
        ),
        migrations.AlterField(
            model_name='user',
            name='max_bid_amount',
            field=models.DecimalField(decimal_places=3, default=Decimal('120.00'), max_digits=10),
        ),
    ]
