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
            $error = 'Registration failed.';
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
            $error = 'Invalid credentials.';
            return $error;
        }

        $isUserPasswordIncorrect = !Hash::check($userDTO->password, $user->password);

        if ($isUserPasswordIncorrect) {
            $error = 'Invalid credentials.';
            return $error;
        }

        $isUserLoggedIn = Auth::attempt($userDTO->toArray());

        if (!$isUserLoggedIn) {
            $error = 'Login failed.';
            return $error;        
        }

        return $error;
    }
}