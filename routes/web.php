<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => Inertia('Home'));
Route::get('/dashboard', fn () => Inertia('Dashboard'))->name('dashboard');

Route::prefix('auth')->group(function () {
    Route::get('/login', fn () => Inertia('Auth'));
    Route::get('/register', fn () => Inertia('Auth'));

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::prefix('third-party-login')->group(function () {
        Route::get('/request/{driver}', [AuthController::class, 'requestThirdPartyLogin'])->whereIn('driver', config('oauth.drivers'));
        Route::get('/response/{driver}', [AuthController::class, 'respondThirdPartyLogin'])->whereIn('driver', config('oauth.drivers'));
    });
});
