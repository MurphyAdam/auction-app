from datetime import datetime
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager
from hashlib import md5
from django.template.defaultfilters import slugify


class User(AbstractUser):
    """
    Custom user model with an email as unique identifier
    """
    email = models.EmailField('Email address', unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    @property
    def links(self):
        return {'avatar': self.avatar(128), }

    def avatar(self, size: int = 128):
        digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return 'https://www.gravatar.com/avatar/{}?d=monsterid&s={}'.format(
            digest, size)

    def __str__(self):
        return self.email
