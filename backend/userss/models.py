from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)



class Company(models.Model):
    name = models.CharField(max_length=255,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class User(AbstractUser):
    ROLE_CHOICES = [
        ('founder', 'Founder'),
        ('admin', 'Admin'),
        ('employee', 'Employee'),
    ]

    username = None                          # remove username field
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

    objects = CustomUserManager()  # attaching custom manager here

    def __str__(self):
        return f"{self.name} - {self.role}"
