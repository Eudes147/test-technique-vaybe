from django.urls import path
from .views import ApplicationListCreateView,AdminLoginView

urlpatterns = [
    path('applications/', ApplicationListCreateView.as_view()),
    path('admin/login/', AdminLoginView.as_view()), 
]