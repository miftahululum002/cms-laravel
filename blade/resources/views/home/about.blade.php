@extends('layouts.front')
@section('content')
<section id="about" class="pt-36 pb-32 dark:bg-dark">
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full px-4 mb-10 lg:w-1/2">
                <h4 class="font-bold uppercase text-lg text-primary mb-3">
                    Tentang Saya
                </h4>
                <h2 class="font-bold text-3xl text-dark mb-5 max-w-md lg:text-4xl dark:text-white">
                    Yuk, belajar web programming bersama CodoProID
                </h2>
                <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Fugiat repellendus, at totam repudiandae
                    similique aperiam animi tempora expedita.
                </p>
            </div>
            <div class="w-full px-4 lg:w-1/2">
                <h3 class="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                    Mari berteman
                </h3>
                <p class="font-medium text-balance text-secondary mb-6 lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Deleniti ex incidunt saepe, hic neque tenetur
                    voluptatem? Error assumenda velit dolore.
                </p>
                <div class="flex items-center">
                    @include('components.sociallinks')
                </div>
            </div>
        </div>
    </div>
</section>
@endsection