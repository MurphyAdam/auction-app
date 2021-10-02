# Generated by Django 3.2.7 on 2021-10-02 09:58

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('bids', '0010_auto_20211002_0948'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bid',
            options={'ordering': ['updated']},
        ),
        migrations.AlterField(
            model_name='bid',
            name='created',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='bid',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='bid',
            name='version',
            field=models.UUIDField(blank=True, default=uuid.UUID('c36d478e-3b95-423f-a2c3-993635ecfd74')),
        ),
    ]