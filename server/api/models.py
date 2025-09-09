from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=100)
    year = models.DateField()

    def __str__(self):
        return self.name
