<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia('Home');
});

Route::get('/auth/login', function () {
    return Inertia('Auth');
});

Route::get('/auth/register', function () {
    return Inertia('Auth');
});

Route::get('/auth/third-party-login/request/{driver}', [UserController::class, 'requestThirdPartyLogin']);

Route::get('/auth/third-party-login/response/{driver}', [UserController::class, 'respondThirdPartyLogin']);

Route::get('/dashboard', function () {
    return Inertia('Dashboard');
})->name('dashboard');

Route::post('/auth/register', [UserController::class, 'register']);

Route::post('/auth/login', [UserController::class, 'login']);