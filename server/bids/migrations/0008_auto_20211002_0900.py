# Generated by Django 3.2.7 on 2021-10-02 09:00

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('bids', '0007_alter_bid_version'),
    ]

    operations = [
        migrations.AddField(
            model_name='bid',
            name='last_bid_origin',
            field=models.CharField(blank=True, default='native', max_length=10),
        ),
        migrations.AlterField(
            model_name='bid',
            name='version',
            field=models.UUIDField(blank=True, default=uuid.UUID('ebc71fd4-979f-46b9-b15e-2e3032b4e989')),
        ),
    ]