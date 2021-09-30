from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path, include
from frontend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/', include('users.urls')),
    path('api/security/', include('security.urls')),
    path('api/', include('products.urls')),
]


# lets serve media and static files

urlpatterns += static(settings.STATIC_URL,
                      document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)

# catch any other URL and forward it to front-end (client, react-router-dom)
urlpatterns += [
    re_path(r"^(?P<path>.*)/$", views.FrontendAppView.as_view()),
    re_path("", views.FrontendAppView.as_view()),
]
