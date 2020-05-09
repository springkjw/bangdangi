from rest_framework import serializers

from apps.rooms.models import Room, Keyword


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = ['id', 'name']


class RoomSerializer(serializers.ModelSerializer):
    contract = serializers.SerializerMethodField()
    keywords = KeywordSerializer(many=True)

    class Meta:
        model = Room
        fields = [
            'id',
            'deposit',
            'rent',
            'expense',
            'contract',
            'keywords',
        ]

    def get_contract(self, obj):
        if obj.contract_type == 0 and obj.contract_period:
            contract = ["{}개월 이상".format(obj.contract_period)]
            if obj.move_direct:
                contract.append("즉시가능")
            elif obj.move_date:
                contract.append("{}부터 가능".format(obj.move_date))
            return contract
        return ["{} ~ {}".format(
            obj.contract_start,
            obj.contract_end,
        )]
