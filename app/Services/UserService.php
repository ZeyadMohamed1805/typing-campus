<?php

namespace App\Services;

use App\DataTransferObjects\UserLoginDTO;
use App\DataTransferObjects\UserRegisterDTO;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function __construct(
        protected UserRepository $userRepository
    ) {}

    public function register(UserRegisterDTO $userDTO): string|null
    {
        $error = null;

        $registeredUser = $this->userRepository->create($userDTO);

        $isUserRegistered = $registeredUser instanceof User;

        if (!$isUserRegistered) {
            $error = 'Registration failed due to system error.';
            return $error;
        }

        return $error;
    }

    public function login(UserLoginDTO $userDTO): string|null
    {
        $error = null;

        $user = $this->userRepository->findByEmail($userDTO->email);
        $isUserNotFound = !$user;

        if ($isUserNotFound) {
            $error = 'Incorrect email or password.';
            return $error;
        }

        $isUserPasswordIncorrect = !Hash::check($userDTO->password, $user->password);

        if ($isUserPasswordIncorrect) {
            $error = 'Incorrect email or password.';
            return $error;
        }

        $isUserLoggedIn = Auth::attempt($userDTO->toArray());

        if (!$isUserLoggedIn) {
            $error = 'Login failed due to system error.';
            return $error;        
        }

        return $error;
    }
}