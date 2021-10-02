# Generated by Django 3.2.7 on 2021-10-02 15:33

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('bids', '0011_auto_20211002_0958'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bid',
            name='version',
            field=models.UUIDField(blank=True, default=uuid.UUID('4bc77679-0ac4-4173-a167-136b558da16a')),
        ),
    ]