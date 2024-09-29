@extends('layouts.front')
@section('content')
<section id="blog" class="pt-36 pb-32 bg-white">
    <div class="container w-full flex justify-between mx-auto">
        <div class="w-3/5 px-4">
            <div class="w-full mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">
                    {{$post->title}}
                </h4>
                <h2 class="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">
                    {{$post->title}}
                </h2>
                <div class="flex justify-center">
                    <img src="{{asset('storage')}}/{{$post->image}}" class="max-w-xl h-auto object-cover text-center" alt="{{$post->title}}" />
                </div>
                <p class="font-medium text-md text-secondary md:text-lg">
                    {{$post->content}}
                </p>
            </div>
        </div>
        <div class="w-2/5 px-2 max-h-80 border border-primary">
            <span class="font-bold text-xl text-primary mb-2">
                Kategori
            </span>
            @foreach($home_categories as $c => $category)
            <div class="w-full text-md text-primary mb-1">
                <a href="{{route('home.blog.index')}}?category={{$category->slug}}">
                    {{$category->name}}
                </a>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endsection