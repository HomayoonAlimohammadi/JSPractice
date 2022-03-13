from django.shortcuts import render
from django.http import JsonResponse

def index_view(request):
    return render(request, 'index.html', {})


def load(request):
    start = 0
    end = 10
    posts = []
    for i in range(start, end):
        posts.append(f'Post #{i}')
    
    return JsonResponse(
        {'posts': posts}
    
    )

