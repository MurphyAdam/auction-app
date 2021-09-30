from django.urls import reverse
from rest_framework import serializers, status
from rest_framework.test import APITestCase, APIClient
from .models import User
from .serializers import UserSerializer


class AccountTests(APITestCase, APIClient):

    username = 'overflow0x'
    email = 'adam@gmail.com'
    password = '12345678abcd@'
    current_user = None

    def test_create_account(self):
        """
        Ensure we can create a new account object.
        """
        url = 'http://127.0.0.1:8000/api/auth/registration/'
        data = {'username': self.username,
                'email': self.email,
                'password1': self.password,
                'password2': self.password,
                }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, 'elm.majidi@gmail.com')
        serializer = UserSerializer(response.data['user'])
        self.assertEqual(serializer.data['username'], self.username)

    def test_login(self):
        self.client.login(email=self.email, password=self.password)
