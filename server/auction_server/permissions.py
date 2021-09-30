from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it
    """

    def has_object_permission(self, request, view, obj):
        """
        Read permissions are allowed to any request, 
        so we'll always allow GET, HEAD, or OPTIONS requests.
        """
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.user == request.user


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it
    """

    def has_object_permission(self, request, view, obj):

        # All permissions are only allowed to the owner of the snippet.
        return obj.user == request.user


class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object or admins to edit it
    """

    def has_object_permission(self, request, view, obj):
        """
        Read permissions are allowed to any request, 
        so we'll always allow GET, HEAD, or OPTIONS requests.
        """
        if request.method in permissions.SAFE_METHODS:
            return True

        # All permissions are only allowed to the owner/ admin of the obj.
        has_admin_attr = hasattr(request.user, 'is_staff')
        if has_admin_attr:
            return request.user.is_staff == True or obj.user == request.user
        return obj.user == request.user


class IsReadOnly(permissions.BasePermission):
    """
    Custom permission to give read only access to obj
    """

    def has_object_permission(self, request, view, obj):
        """
        Read permissions are allowed to any request, 
        so we'll always allow GET, HEAD, or OPTIONS requests.
        """
        if request.method in permissions.SAFE_METHODS:
            return True
