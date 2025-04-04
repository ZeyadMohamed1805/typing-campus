<?php

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
