from django.urls import include, path

urlpatterns = [
    path('users/', include(('api.users.urls', 'users'))),
    path('rooms/', include(('api.rooms.urls', 'rooms'))),
]