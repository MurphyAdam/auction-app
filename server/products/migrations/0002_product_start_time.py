# Generated by Django 3.2.7 on 2021-10-02 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='start_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]