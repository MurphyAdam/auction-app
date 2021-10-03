from .models import User
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from auction_server.permissions import IsReadOnly
from .serializers import UserSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated | IsReadOnly]

    @action(methods=['PUT'], detail=True)
    def update(self, request, *args, **kwargs):
        original_max_bid_amount = request.data.get(
            'original_max_bid_amount', None)
        bid_alert_trigger_level = request.data.get(
            'bid_alert_trigger_level', None)
        user = request.user
        if original_max_bid_amount is not None:
            if float(original_max_bid_amount) > user.funds:
                return Response(
                    {'message': f"Max bid amount cannot be greater than your funds of {user.funds}"},
                    status=400)
        else:
            return Response({'message': "Max bid amount is not specified"},
                            status=400)
        if bid_alert_trigger_level is not None:
            bid_alert_trigger_level = float(bid_alert_trigger_level)
            if bid_alert_trigger_level < 0 or bid_alert_trigger_level > 100:
                return Response({'message': "Bid Alert notification Level should be between 0 and 100"},
                                status=400)
        else:
            return Response({'message': "Bid Alert notification Level is not specified"},
                            status=400)
        user.update_settings(original_max_bid_amount, bid_alert_trigger_level)
        return Response({'message': "Settings saved"}, status=200)
