from calendar import timegm
from datetime import timedelta, datetime
from django.conf import settings
from django.contrib.auth import get_user_model
import jwt
from . import exceptions


def jwt_payload(user, context=None):
    username = user.get_username()

    if hasattr(username, 'pk'):
        username = username.pk
    
    payload = {
        user.USERNAME_FIELD: username,
        'exp': datetime.utcnow() + timedelta(days=30),
        'origIat': timegm(datetime.utcnow().utctimetuple())
    }

    return payload


def jwt_encode(payload, context=None):
    return jwt.encode(
        payload,
        settings.SECRET_KEY,
        'HS256',
    ).decode('utf-8')


def jwt_decode(token, context=None):
    return jwt.decode(
        token,
        settings.SECRET_KEY,
        True,
        options={
            'verify_exp': True
        },
        leeway=timedelta(days=30),
        algorithms=['HS256'],
    )


def get_http_authorization(request):
    auth = request.META.get('HTTP_AUTHORIZATION', '').split()
    prefix = 'Bearer'

    if len(auth) != 2 or auth[0].lower() != prefix.lower():
        return request.COOKIES.get(prefix)
    return auth[1]


def get_token_argument(request, **kwargs):
    return None


def get_credentials(request, **kwargs):
    return (get_token_argument(request, **kwargs) or
            get_http_authorization(request))


def get_payload(token, context=None):
    try:
        payload = jwt_decode(token, context)
    except jwt.ExpiredSignature:
        raise exceptions.JSONWebTokenExpired()
    except jwt.DecodeError:
        raise exceptions.JSONWebTokenError('Error decoding signature')
    except jwt.InvalidTokenError:
        raise exceptions.JSONWebTokenError('Invalid token')
    return payload


def get_user_by_natural_key(username):
    try:
        return get_user_model()._default_manager.get_by_natural_key(username)
    except get_user_model().DoesNotExist:
        return None


def get_user_by_payload(payload):
    username = payload.get('email')

    if not username:
        raise exceptions.JSONWebTokenError('Invalid payload')

    user = get_user_by_natural_key(username)

    if user is not None and not getattr(user, 'is_active', True):
        raise exceptions.JSONWebTokenError('User is disabled')
    return user


def get_user_by_token(token, context=None):
    payload = get_payload(token, context)
    return get_user_by_payload(payload)
