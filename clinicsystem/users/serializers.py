from rest_framework import serializers 
from users.models import SystemUser

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SystemUser
        fields = '__all__'