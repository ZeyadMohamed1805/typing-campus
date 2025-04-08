<?php

namespace App\Http\Controllers;

use App\DataTransferObjects\UserLoginDTO;
use App\DataTransferObjects\UserRegisterDTO;
use App\Http\Requests\AuthLoginRequest;
use App\Http\Requests\AuthRegisterRequest;
use App\Services\AuthService;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService
    ) {}
    public function register(AuthRegisterRequest $request)
    {
        $userDTO = UserRegisterDTO::fromArray($request->validated());
        
        $errorResponse = $this->authService->register($userDTO);

        if ($errorResponse) {
            return redirect()->back()->withErrors($errorResponse);
        }

        return redirect()->route('dashboard');
    }

    public function login(AuthLoginRequest $request)
    {
        $userDTO = UserLoginDTO::fromArray($request->validated());

        $errorResponse = $this->authService->login($userDTO);

        if ($errorResponse) {
            return redirect()->back()->withErrors($errorResponse);
        }

        return redirect()->route('dashboard');
    }

    public function requestThirdPartyLogin($driver)
    {
        return Socialite::driver($driver)->redirect();
    }

    public function respondThirdPartyLogin($driver)
    {
        $errorResponse = $this->authService->thirdPartyLogin($driver);

        if ($errorResponse) {
            return redirect("/auth/login")->withErrors($errorResponse);
        }

        return redirect()->route('dashboard');
    }
}
