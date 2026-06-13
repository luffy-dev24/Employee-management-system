from django.urls import path
from . import views

urlpatterns = [
    path('add/',views.RegisterEmployeeAndADDEmployeeView.as_view(),name='add-employee'),
    path("getemployees/",views.AddEmployee.as_view(),name="getemployees"),
    path('update/<int:pk>/',views.UpdateEmployee.as_view(),name='update-employee'),
]

