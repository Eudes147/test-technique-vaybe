from django.db import models

# Create your models here.

class Application(models.Model):
    ROLE_CHOICES = [
        ('dev', 'Développeur'),
        ('designer', 'Designer'),
    ]

    nom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    motivation = models.TextField()
    portfolio = models.FileField(upload_to='portfolio/', blank=True, null=True)

    cv = models.FileField(upload_to='cvs/', blank=True, null=True)
    score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nom} - {self.role}"