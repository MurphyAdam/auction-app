from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


class CustomUserAdmin(UserAdmin):
    list_filter = ('id', 'date_joined')
    search_fields = ('username', )
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (                      # new fieldset added on to the bottom
            # group heading of your choice; set to None for a blank space instead of a header
            'Funds',
            {
                'fields': (
                    'funds',
                ),
            },
        ),
        (
            'Max Bid Amount',
            {
                'fields': (
                    'max_bid_amount',
                ),
            },
        ),
        (
            'Bid Alert notification',
            {
                'fields': (
                    'bid_alert_trigger',
                ),
            },
        ),
    )


admin.site.register(User, CustomUserAdmin)
