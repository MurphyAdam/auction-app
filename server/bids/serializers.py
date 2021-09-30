from rest_framework import serializers
from .models import Bid
from users.serializers import UserSerializer


class BidsSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Bid
        fields = ('id', 'amount', 'version', 'user')
