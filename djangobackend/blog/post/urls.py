from django.urls import path, include
from .views import postviewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'post', postviewset)

urlpatterns = [
    path('', include(router.urls)),
]
