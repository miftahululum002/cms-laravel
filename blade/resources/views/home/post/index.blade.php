@extends('layouts.front')
@section('content')
<section id="blog" class="pt-36 pb-32 bg-slate-100 dark:bg-dark">
    <div class="container mx-auto">
        <div class="w-full px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">
                    Blog
                </h4>
                <h2 class="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                    {{$subtitle}}
                </h2>
                <p class="font-medium text-md text-secondary md:text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Soluta numquam natus aperiam iusto?
                </p>
            </div>
        </div>
        <div class="flex flex-wrap" id="blog-content">
            @foreach($posts as $index => $post)
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                    <img
                        src="{{asset('storage')}}/{{$post->image}}"
                        class="w-full h-48 object-cover"
                        alt="{{$post->title}}" />
                    <div class="py-8 px-4">
                        <h3>
                            <a href="#"
                                class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">
                                {{$post->title}}</a>
                        </h3>
                        <p class="font-medium text-base text-secondary mb-4">
                            {{$post->content}}
                        </p>
                        <a href="{{route('home.blog.read',[$post->slug])}}"
                            class="font-medium text-white bg-primary py-2 px-4 rounded-none hover:opacity-80">Selengkapnya</a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endsection