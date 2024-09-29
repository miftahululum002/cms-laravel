<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<?php
$app_name = config('miftahululum.app_name');
$author = config('miftahululum.author');
$home_categories =  getCategories(); ?>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $app_name }} &mdash; {{$title}}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>


<body class="font-sans text-gray-900 antialiased">
    <!-- Header -->
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
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div>
        @yield('content')
    </div>
    <!-- Contact Section Start -->

    <!-- Contact Section End -->
    <!-- Footer Start -->
    <footer class="bg-dark pt-24 pb-12">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                    <h2 class="font-bold text-4xl text-white mb-5">
                        CodoProID
                    </h2>
                    <h3 class="font-bold text-2xl mb-2">Hubungi Kami</h3>
                    <p>codopro.id@gmail.com</p>
                    <p>Jl. Panglima Sudirman Desa Codo Kec. Wajak</p>
                    <p>Malang</p>
                </div>
                <div class="w-full px-4 mb-12 md:w-1/3">
                    <h3 class="font-semibold text-xl text-white mb-5">
                        Kategori Tulisan
                    </h3>
                    <ul class="text-slate-300">
                        <li>
                            <a href="#" class="inline-block text-base hover:text-primary mb-3">Programming</a>
                        </li>
                        <li>
                            <a href="#" class="inline-block text-base hover:text-primary mb-3">Teknologi</a>
                        </li>
                        <li>
                            <a href="#" class="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a>
                        </li>
                    </ul>
                </div>
                <div class="w-full px-4 mb-12 md:w-1/3">
                    <h3 class="font-semibold text-xl text-white mb-5">
                        Tautan
                    </h3>
                    <ul class="text-slate-300">
                        <li>
                            <a href="#home" class="inline-block text-base hover:text-primary mb-3">Beranda</a>
                        </li>
                        <li>
                            <a href="#about" class="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="inline-block text-base hover:text-primary mb-3">Portofolio</a>
                        </li>
                        <li>
                            <a href="#client" class="inline-block text-base hover:text-primary mb-3">Klien</a>
                        </li>
                        <li>
                            <a href="#blog" class="inline-block text-base hover:text-primary mb-3">Blog</a>
                        </li>
                        <li>
                            <a href="#contact" class="inline-block text-base hover:text-primary mb-3">Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full pt-10 border-t border-slate-700">
                <div class="flex items-center justify-center mb-5">
                    <!-- Youtube -->
                    <a href="https://www.youtube.com/@codoprodotid" target="_blank"
                        class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>YouTube</title>
                            <path
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </a>
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/berandal_usaha_apik" target="_blank"
                        class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Instagram</title>
                            <path
                                d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                        </svg>
                    </a>
                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/in/miftahululum002" target="_blank"
                        class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>LinkedIn</title>
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
                <p class="font-medium text-xs text-slate-500 text-center">
                    Dibuat dengan <span class="text-pink-500">❤️</span> oleh
                    <a href="#" target="_blank" class="text-bold text-primary">Miftahul Ulum</a>, menggunakan
                    <a href="https://tailwindcss.com" target="_blank" class="font-bold text-sky-500">tailwind CSS</a>
                </p>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
    <!-- Back to top Start -->
    <a href="#home"
        class="fixed hidden justify-center items-center z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse"
        id="to-top">
        <span class="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
    </a>
</body>

</html>