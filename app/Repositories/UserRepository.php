<?php

namespace App\Repositories;

use App\DataTransferObjects\UserRegisterDTO;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserRepository
{
    public function create(UserRegisterDTO $userDTO): ?User
    {
        $createdUser = null;

        try {
            $createdUser = User::create([
                'username' => $userDTO->username,
                'email' => $userDTO->email,
                'password' => bcrypt($userDTO->password),
            ]);
        } catch (\Exception $error) {
            Log::error('User registration failed: ' . $error->getMessage());
        }

        return $createdUser;
    }

    public function findByEmail(string $email): ?User
    {
        $foundUser = null;

        try {
            $foundUser = User::where('email', $email)->first();
        } catch (\Exception $error) {
            Log::error('User login failed: ' . $error->getMessage());
        }

        return $foundUser;
    }
}
