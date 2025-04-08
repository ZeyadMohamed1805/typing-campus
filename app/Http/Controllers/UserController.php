<?php

namespace App\Http\Controllers;

use App\DataTransferObjects\UserLoginDTO;
use App\DataTransferObjects\UserRegisterDTO;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Services\UserService;
use Laravel\Socialite\Facades\Socialite;

class UserController extends Controller
{
    public function __construct(
        protected UserService $userService
    ) {}
    public function register(UserRegisterRequest $request)
    {
        $userDTO = UserRegisterDTO::fromArray($request->validated());
        
        $errorResponse = $this->userService->register($userDTO);

        if ($errorResponse) {
            return redirect()->back()->withErrors($errorResponse);
        }

        return redirect()->route('dashboard');
    }

    public function login(UserLoginRequest $request)
    {
        $userDTO = UserLoginDTO::fromArray($request->validated());

        $errorResponse = $this->userService->login($userDTO);

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
        $errorResponse = $this->userService->thirdPartyLogin($driver);

        if ($errorResponse) {
            return redirect("/auth/login")->withErrors($errorResponse);
        }

        return redirect()->route('dashboard');
    }
}
