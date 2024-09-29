@extends('layouts.front')
@section('content')
<section id="home" class="pt-36 dark:bg-dark">
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full self-center px-4 py-40">
                <h1 class="text-base font-semibold text-primary md:text-xl">
                    Selamat Datang Semua 👋
                    <span class="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl"></span>
                </h1>
                <h2 class="mb-5 text-lg font-medium text-secondary lg:text-2xl">
                    Ukir sejarah dengan
                    <span class="text-dark dark:text-white">Tulisan</span>
                </h2>
                <p class="mb-10 font-medium leading-relaxed text-secondary">
                    Menulis adalah cara terbaik untuk mengungkapkan
                    apa yang ada di dalam pikiran kita. Jika Anda
                    memiliki ide, cerita, atau pengalaman yang ingin
                    dibagikan, kami siap membantu Anda. Jangan ragu
                    untuk menghubungi kami jika Anda memiliki
                    pertanyaan atau ingin berkolaborasi. Kami akan
                    senang mendengar dari Anda.
                    <span class="font-bold text-dark dark:text-white">Tulisan!</span>
                </p>
                <a href="{{route('register')}}"
                    class="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">Daftar Sekarang
                </a>
            </div>
        </div>
    </div>
</section>
<section id="blog" class="pt-36 pb-32 bg-slate-100 dark:bg-dark">
    <div class="container mx-auto">
        <div class="w-full px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">
                    Blog
                </h4>
                <h2 class="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                    Tulisan Terbaru
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
                        <a href="blog.html"
                            class="font-medium text-white bg-primary py-2 px-4 rounded-none hover:opacity-80">Selengkapnya</a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endsection