<?php

namespace App\Http\Controllers;

use App\DataTransferObjects\UserRegisterDTO;
use App\Http\Requests\UserRegisterRequest;
use App\Services\UserService;

class UserController extends Controller
{
    public function __construct(
        protected UserService $userService
    ) {}
    public function register(UserRegisterRequest $request)
    {
        $userDTO = UserRegisterDTO::fromArray($request->validated());
        
        $isUserRegistered = $this->userService->register($userDTO);

        if (!$isUserRegistered) {
            return redirect()->back()->withErrors(['error' => 'Registration failed!']);
        }

        return redirect()->route('dashboard')->with('success', 'Registration successful!');
    }
}
