from django.views.decorators.csrf import ensure_csrf_cookie, get_token
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import authentication, serializers
from rest_framework.response import Response
from users.serializers import TokenSerializer


@ensure_csrf_cookie
def get_csrf_token(request):
    """
        This will be `/api/set-csrf-cookie/` on `urls.py`
        """
    token = get_token(request)
    return JsonResponse({"csrftoken": token})


class CheckAuth(APIView):
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        if request.auth:
            serializer = TokenSerializer(request.auth,
                                         context={'request': request})
            return Response(serializer.data, 200)
        return Response(
            {
                'message': 'You are not authenticated',
                'user': None,
                'key': None
            }, 400)
