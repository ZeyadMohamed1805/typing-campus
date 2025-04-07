<?php

namespace App\Repositories;

use App\DataTransferObjects\UserRegisterDTO;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserRepository
{
    public function create(UserRegisterDTO $userDTO): User
    {
        try {
            return User::create([
                'first_name' => $userDTO->first_name,
                'last_name' => $userDTO->last_name,
                'email' => $userDTO->email,
                'password' => bcrypt($userDTO->password),
            ]);
        } catch (\Exception $error) {
            Log::error('User registration failed: ' . $error->getMessage());
            throw new \RuntimeException('Registration failed.');
        }
    }

    public function findByEmail(string $email): ?User
    {
        try {
            return User::where('email', $email)->first();
        } catch (\Exception $error) {
            Log::error('User login failed: ' . $error->getMessage());
            throw new \RuntimeException('Incorrect email or password.');
        }
    }
}
