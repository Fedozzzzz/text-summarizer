## filename: views.py (Django view functions)

from django.http import HttpResponse
from django.http import JsonResponse

def summarize(request):
    # text = request.
    # return HttpResponse('Hello from Django!')
    return JsonResponse({"summarized_text": "Hello World!"})
