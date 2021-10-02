# Generated by Django 3.2.7 on 2021-10-02 09:48

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('bids', '0009_alter_bid_version'),
    ]

    operations = [
        migrations.AddField(
            model_name='bid',
            name='updated',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='bid',
            name='version',
            field=models.UUIDField(blank=True, default=uuid.UUID('3ab2530f-a778-416e-a21a-409df3fb18d6')),
        ),
    ]