from rest_framework import serializers
from .models import Category, Product
from users.serializers import UserSerializer
from bids.serializers import BidsSerializer


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name', 'slug')


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    user = UserSerializer(many=False, read_only=True)
    last_bid = BidsSerializer(many=False, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'description',
                  'poster', 'category', 'min_bid',
                  'last_bid', 'last_bid_value', 'expires_in', 'user')
