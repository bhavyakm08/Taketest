from django.db import models

# Create your models here.

class Customer(models.Model):

	heading = models.CharField(max_length=200)
	details = models.CharField(max_length=800)

    
	def __str__(self):
		return self.heading + ' ' + self.details   