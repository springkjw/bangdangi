# Generated by Django 3.0.5 on 2020-05-06 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0002_auto_20200430_1218'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='keywords',
            field=models.ManyToManyField(to='rooms.Keyword'),
        ),
    ]
