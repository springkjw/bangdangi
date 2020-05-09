from django.db.models import Prefetch
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from apps.rooms.models import Room, Keyword
from .serializers import RoomSerializer


class RoomListView(ListAPIView):
    serializer_class = RoomSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Room.objects.prefetch_related(
            Prefetch(
                'keywords',
                queryset=Keyword.objects.filter(is_active=True),
                to_attr='rooms_keywords'
            )
        )

        type = self.request.GET.get('type')
        if type == 'new':
            queryset = queryset.order_by('-created')[:10]

        return queryset
