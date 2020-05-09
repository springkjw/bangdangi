from graphene_django import DjangoObjectType
import graphene
from apps.rooms.models import Room


class RoomType(DjangoObjectType):
    class Meta:
        model = Room
        exclude = ('coordinate',)

    # coordinate = graphene.List()

    # def resolve_coordinate(self, info):
    #     print(info)
    #     return []


class Query(graphene.ObjectType):
    rooms = graphene.List(RoomType)

    def resolve_rooms(self, info):
        return Room.objects.all()


schema = graphene.Schema(query=Query)
