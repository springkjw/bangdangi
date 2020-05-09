import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True

ENV_PATH = os.path.join(BASE_DIR, '.env')
if DEBUG and os.path.isfile(ENV_PATH):
    with open(os.path.join(ENV_PATH), 'r') as fh:
        vars_dict = dict()
        for line in fh:
            if line.startswith('#') or not line.strip():
                continue
            key, value = line.strip().split('=', 1)
            vars_dict[key] = value
        os.environ.update(vars_dict)

ALLOWED_HOSTS = [
    'localhost',
    'bangdangi.com',
]

SECRET_KEY = os.environ.get('SECRET_KEY')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.gis',
    'graphene_django',
    'corsheaders',
    'rest_framework',
    'apps.users',
    'apps.rooms',
    'apps.comments',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.mysql',
        'HOST': os.environ.get('BANGDANGI_HOST'),
        'NAME': os.environ.get('BANGDANGI_NAME'),
        'USER': os.environ.get('BANGDANGI_USER'),
        'PASSWORD': os.environ.get('BANGDANGI_PASSWORD'),
        'PORT': 3306
    }
}

AUTH_USER_MODEL = 'users.User'
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
AUTHENTICATION_BACKENDS = [
    'graph.backends.JSONWebTokenBackend',
    'django.contrib.auth.backends.ModelBackend',
]

LANGUAGE_CODE = 'ko-kr'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


STATIC_URL = '/static/'
DEFAULT_FILE_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
STATICFILES_STORAGE = 'storages.backends.gcloud.GoogleCloudStorage'
GS_BUCKET_NAME = 'bangdangi'

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
}

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000'
]

GRAPHENE = {
    'SCHEMA': 'graph.schema.schema',
    'MIDDLEWARE': [
        'graph.middleware.JSONWebTokenMiddleware',
    ]
}
