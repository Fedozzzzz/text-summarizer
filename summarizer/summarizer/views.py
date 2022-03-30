# filename: views.py (Django view functions)
from django.http import JsonResponse
import json
from summa.summarizer import summarize


def summarize_text(request):
    received_data = json.loads(request.body)
    if 'text' in received_data:
        text_for_summary = received_data['text']
        summarized_text = summarize(text_for_summary, ratio=0.2)
        return JsonResponse({"summarizedText": summarized_text}, status=200)
    return JsonResponse({"error": "Request should contain 'text' field"}, status=400)
