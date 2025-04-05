<?php

namespace App\Services;

use App\DataTransferObjects\UserRegisterDTO;
use App\Models\User;
use App\Repositories\UserRepository;

class UserService
{
    public function __construct(
        protected UserRepository $userRepository
    ) {}

    public function register(UserRegisterDTO $userDTO): bool
    {
        $isUserRegistered = false;

        $registeredUser = $this->userRepository->create($userDTO);

        if ($registeredUser instanceof User) {
            $isUserRegistered = true;
        }

        return $isUserRegistered;
    }
}