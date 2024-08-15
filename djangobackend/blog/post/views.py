from .serializers import PostSerializer
from .models import post
from rest_framework.viewsets import ModelViewSet

class postviewset(ModelViewSet):
    queryset = post.objects.all()
    serializer_class = PostSerializer
