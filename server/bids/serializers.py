from decimal import Decimal
from rest_framework import serializers
from .models import Bid
from users.serializers import UserSerializer


class BidsSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Bid
        fields = ('id', 'amount', 'version', 'auto_bid', 'updated', 'user')

    def create(self, validated_data):
        amount = validated_data.get('amount', Decimal('10.00'))
        product = validated_data.get('product')
        auto_bid = validated_data.get('auto_bid', None)
        #last_bid_version = validated_data.get('version', None)
        bid = validated_data.pop('bid')
        last_bid_origin = "native"
        """
        if bid.version != last_bid_version:
            raise serializers.ValidationError(
                {'message': f'Could not place your bid of {amount}. \
                    Other bids may have taken place. \
                        Please refresh page.'})
        """
        if product.expired:
            raise serializers.ValidationError(
                {'message': 'You cannot bid on this product. Bids are finished.'})
        if product.last_bid_value:
            if product.last_bid_value >= 9999999:
                raise serializers.ValidationError(
                    {
                        'message':
                            f'Bid amount reached maximum of {product.last_bid_value}. \
                                Bids cannot be placed anymore'
                    })
            if product.last_bid_value >= amount:
                raise serializers.ValidationError(
                    {
                        'message':
                            f'Bid amount should be larger than last bid of {product.last_bid_value}'
                    })
        if product.min_bid > amount:
            raise serializers.ValidationError(
                {'message': 'Bid amount should be larger than minimum bid'})
        if bid:
            bid.amount = amount
            bid.last_bid_origin = last_bid_origin
            if auto_bid is not None:
                bid.auto_bid = auto_bid
            bid.save()
            return bid
        return Bid.objects.create(**validated_data, last_bid_origin=last_bid_origin)
