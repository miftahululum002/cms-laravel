@extends('layouts.front')
@section('content')
<section id="contact" class="w-full pt-36 pb-32 dark:bg-slate-800">
    <div class="container">
        <div class="w-full px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">
                    Kontak Saya
                </h4>
                <h2 class="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                    Hubungi Kami
                </h2>
                <p class="font-medium text-md text-secondary md:text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Vero, cupiditate!
                </p>
            </div>
        </div>
        <form>
            <div class="w-full lg:w-2/3 lg:mx-auto">
                <div class="w-full px-4 mb-8">
                    <label for="name" class="text-base font-bold text-primary">Nama <span
                            class="text-red-500">*</span></label>
                    <input type="text" id="name"
                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                        placeholder="Nama" />
                </div>
                <div class="w-full px-4 mb-8">
                    <label for="email" class="text-base font-bold text-primary">Email
                        <span class="text-red-500">*</span></label>
                    <input type="email" id="email"
                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                        placeholder="Email" />
                </div>
                <div class="w-full px-4 mb-8">
                    <label for="message" class="text-base font-bold text-primary">Pesan
                        <span class="text-red-500">*</span></label>
                    <textarea id="message"
                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                        placeholder="Pesan"></textarea>
                </div>
                <div class="w-full px-4">
                    <button type="button"
                        class="text-base text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                        Kirim
                    </button>
                </div>
            </div>
        </form>
    </div>
</section>
@endsection