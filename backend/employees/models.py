from django.db import models

# Create your models here.
class Employees(models.Model):
    name = models.CharField(max_length=100,unique=True)
    age = models.IntegerField()
    salary = models.IntegerField(null=True,blank=True)
    profile_pic = models.ImageField(upload_to='images/',null=True,blank=True)
    
    def __str__(self):
        return self.name