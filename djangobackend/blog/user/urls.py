from django.urls import path
from .views import signin, register, get 

urlpatterns = [
    path('signin/', signin, name='token_obtain_pair'),
    path('register/', register, name='token_refresh'),
    path('profile/', get, name='get'),
]
