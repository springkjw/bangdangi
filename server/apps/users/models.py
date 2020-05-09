from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserType(models.IntegerChoices):
    USER = 0
    HOST = 1
    STAFF = 2
    ADMIN = 3


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
        email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(email=email, password=password)
        user.type = UserType.ADMIN
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    type = models.IntegerField(choices=UserType.choices, default=UserType.USER)
    is_active= models.BooleanField(default=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    class Meta:
        db_table = 'users'

    @property
    def is_staff(self):
        return self.type in (UserType.STAFF, UserType.ADMIN)

    def has_module_perms(self, obj):
        return True

    def has_perm(self, obj):
        return True
