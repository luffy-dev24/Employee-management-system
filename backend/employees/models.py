from django.db import models
from userss.models import User

# Create your models here.
class Employees(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    salary = models.IntegerField(null=True,blank=True)
    profile_pic = models.ImageField(upload_to='images/',null=True,blank=True)
    
    def __str__(self):
        return self.name