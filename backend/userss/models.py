from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.



class Company(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class User(AbstractUser):
    ROLE_CHOICES = [
        ('founder', 'Founder'),
        ('admin', 'Admin'),
        ('employee', 'Employee'),
    ]

    username = None                            # remove username field
    email = models.EmailField(unique=True)     # email is unique for every user
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='users'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'        # login with email instead of username
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return f"{self.name} - {self.role}"
