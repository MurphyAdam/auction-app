# Generated by Django 3.2.7 on 2021-10-02 13:32

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('bids', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bid',
            name='version',
            field=models.UUIDField(blank=True, default=uuid.UUID('6616bcee-7129-44ed-8dc3-dcb7201e5555')),
        ),
    ]
