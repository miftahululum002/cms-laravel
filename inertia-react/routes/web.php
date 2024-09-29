<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostHomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('index');
// Route::get('coba', function () {
//     return view('coba');
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::controller(DashboardController::class)->group(function () {
            Route::get('/', 'index')->name('dashboard');
        });
        Route::name('dashboard.')->group(function () {
            Route::prefix('posts')->group(function () {
                Route::name('posts.')->group(function () {
                    Route::controller(PostController::class)->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('create', 'create')->name('create');
                        Route::get('edit/{post}', 'edit')->name('edit');
                        Route::get('show/{post}', 'show')->name('show');
                        Route::post('/store', 'store')->name('store');
                        Route::patch('/update', 'update')->name('update');
                        Route::delete('/delete', 'destroy')->name('destroy');
                    });
                });
            });
            Route::prefix('categories')->group(function () {
                Route::name('categories.')->group(function () {
                    Route::controller(CategoryController::class)->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('create', 'create')->name('create');
                        Route::get('edit/{category}', 'edit')->name('edit');
                        Route::post('/store', 'store')->name('store');
                        Route::patch('/update', 'update')->name('update');
                        Route::patch('/activate', 'activate')->name('activate');
                        Route::delete('/delete', 'destroy')->name('destroy');
                    });
                });
            });
        });
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
