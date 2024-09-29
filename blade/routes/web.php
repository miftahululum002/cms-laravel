<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostHomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::name('home.')->group(function () {
    Route::controller(HomeController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/contact', 'contact')->name('contact');
        Route::get('/about', 'about')->name('about');
    });
    Route::name('blog.')->group(function () {
        Route::prefix('blog')->group(function () {
            Route::controller(PostHomeController::class)->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/read/{slug}', 'read')->name('read');
            });
        });
    });
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
