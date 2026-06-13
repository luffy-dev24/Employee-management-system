# permissions.py
from rest_framework.permissions import BasePermission

class IsFounder(BasePermission):
    message = "Only founders can perform this action."  # custom error message 

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == "founder"
        )


class IsAdmin(BasePermission):
    message = "Only admins can perform this action."

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role == "admin"
        )


class IsFounderOrAdmin(BasePermission):
    message = "Only founders or admins can perform this action."

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and
            request.user.role in ["founder", "admin"]
        )