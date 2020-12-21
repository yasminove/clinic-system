from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from  users.models import SystemUser

class UserViewSet(viewsets.ModelViewSet):
    queryset = SystemUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer