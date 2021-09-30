# Generated by Django 3.2.7 on 2021-09-30 19:08

from decimal import Decimal
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, max_length=100)),
            ],
            options={
                'verbose_name_plural': 'categories',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=127)),
                ('slug', models.CharField(blank=True, max_length=127)),
                ('description', models.CharField(max_length=4048)),
                ('min_bid', models.DecimalField(blank=True, decimal_places=2, default=Decimal('10.00'), max_digits=10, validators=[django.core.validators.MinValueValidator(Decimal('10.00'))])),
                ('bid', models.DecimalField(decimal_places=2, max_digits=10)),
                ('poster', models.ImageField(upload_to='products-images/')),
                ('expires_in', models.DateTimeField(blank=True, null=True)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.category')),
            ],
        ),
    ]
