<?php

namespace App\Repositories;

use App\DataTransferObjects\UserRegisterDTO;
use App\Models\User;

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
            throw new \RuntimeException('Failed to create user: ' . $error->getMessage());
        }
    }
}
