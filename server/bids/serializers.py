from rest_framework import serializers
from .models import Bids
from users.serializers import UserSerializer


class BidsSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Bids
        fields = ('id', 'amount', 'version', 'user')
