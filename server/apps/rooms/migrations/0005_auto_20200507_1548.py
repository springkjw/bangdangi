# Generated by Django 3.0.5 on 2020-05-07 15:48

import apps.rooms.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0004_auto_20200506_1743'),
    ]

    operations = [
        migrations.AddField(
            model_name='roomimage',
            name='room',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='rooms.Room'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='roomimage',
            name='image',
            field=models.ImageField(upload_to=apps.rooms.models.get_room_image_path),
        ),
    ]
