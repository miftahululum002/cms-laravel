<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $app_name }} &mdash; {{$title}}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="icon" href="{{asset('img')}}/logo.png" />
</head>

<body class="font-sans text-gray-900 antialiased">
    <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <a href="#home" class="font-bold text-lg text-primary block py-6">{{$app_name}}</a>
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
                        <span class="humberger-line origin-top-left transition duration-300 ease-in-out"></span>
                        <span class="humberger-line transition duration-300 ease-in-out"></span>
                        <span class="humberger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                    </button>
                    <nav id="nav-menu"
                        class="hidden absolute py-5 bg-white shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="{{route('home.index')}}"
                                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Beranda</a>
                            </li>
                            <li class="group">
                                <a href="{{route('home.blog.index')}}"
                                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Blog</a>
                            </li>
                            <li class="group">
                                <a href="{{route('home.about')}}"
                                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Tentang
                                    Kami</a>
                            </li>

                            <li class="group">
                                <a href="{{route('home.contact')}}"
                                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Hubungi Kami</a>
                            </li>
                            @auth
                            <li class="group">
                                <a href="{{route('dashboard')}}"
                                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Dashboard</a>
                            </li>
                            @else
                            <li class="group">
                                <a href="{{route('login')}}"
                                    class="text-base py-2 flex bg-primary px-4 group-hover:text-white">Login</a>
                            </li>
                            <li class="group">
                                <a href="{{route('register')}}"
                                    class="text-base py-2 ml-2 flex bg-primary px-4 group-hover:text-white">Register</a>
                            </li>
                            @endauth
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div id="top">
        @yield('content')
    </div>
    <!-- Footer Start -->
    <footer class="bg-dark pt-24 pb-12">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/2">
                    <h2 class="font-bold text-4xl text-white mb-5">
                        {{$app_name}}
                    </h2>
                    <p>{{$author->email}}</p>
                    <p>{{$author->address}}</p>
                </div>
                <div class="w-full px-4 mb-12 md:w-1/2">
                    <h3 class="font-semibold text-xl text-white mb-5">
                        Kategori Tulisan
                    </h3>
                    <ul class="text-slate-300">
                        @foreach($home_categories as $h => $category)
                        <li>
                            <a href="{{route('home.blog.index')}}?category={{$category->slug}}" class="inline-block text-base hover:text-primary mb-3">{{$category->name}}</a>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="w-full pt-10 border-t border-slate-700">
                <div class="flex items-center justify-center mb-5">
                    @include('components.sociallinks')
                </div>
                <p class="font-medium text-xs text-slate-500 text-center">
                    Dibuat dengan <span class="text-pink-500">❤️</span> oleh
                    <a href="{{$author->github}}" target="_blank" class="text-bold text-primary">{{$author->name}}</a>, menggunakan
                    <a href="https://tailwindcss.com" target="_blank" class="font-bold text-sky-500">tailwind CSS</a>
                </p>
            </div>
        </div>
    </footer>
    <a href="#top"
        class="fixed hidden justify-center items-center z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse"
        id="to-top">
        <span class="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
    </a>
    <script src="{{asset('js')}}/script.js"></script>
</body>

</html>