# Generated by Django 4.1.3 on 2022-12-07 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sources', '0017_alter_collection_platform_alter_source_platform'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collection',
            name='platform',
            field=models.CharField(choices=[('online_news', 'Online News'), ('reddit', 'Reddit'), ('twitter', 'Twitter'), ('youtube', 'Youtube')], default='online_news', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='source',
            name='media_type',
            field=models.CharField(choices=[('audio_broadcast', 'Audio Broadcast'), ('digital_native', 'Digital Native'), ('print_native', 'Print Native'), ('other', 'Other'), ('video_broadcast', 'Video Broadcast')], max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='source',
            name='platform',
            field=models.CharField(choices=[('online_news', 'Online News'), ('youtube', 'Youtube'), ('twitter', 'Twitter'), ('reddit', 'Reddit')], default='online_news', max_length=100, null=True),
        ),
    ]
