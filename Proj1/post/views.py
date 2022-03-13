from django.shortcuts import render
from django.http import JsonResponse

def index_view(request):
    return render(request, 'post/index.html', {})


def load(request):
    start = int(request.GET.get('start'))
    end = int(request.GET.get('end'))
    posts = []
    for i in range(start, end):
        posts.append(f'Post #{i}')
    
    return JsonResponse(
        {'posts': posts},
        safe=False
    )

