<?php

namespace App\Repositories;

use App\DataTransferObjects\ThirdPartyUserLoginDTO;
use App\DataTransferObjects\UserRegisterDTO;
use App\Models\ThirdPartyUser;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Contracts\User as SocialiteUser;

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

    public function createOrUpdate(SocialiteUser $user): ?User
    {
        $createdOrUpdatedUser = null;

        try {
            $createdOrUpdatedUser = User::updateOrCreate(
                ['email' => $user->getEmail()],
                [
                    'username' => $user->getName(),
                    'password' => bcrypt($user->getId()),
                ]
            );
        } catch (\Exception $error) {
            Log::error('User third party login failed: ' . $error->getMessage());
        }

        return $createdOrUpdatedUser;
    }

    public function createWithThirdParty(ThirdPartyUserLoginDTO $userDTO): ?User
    {
        $user = $this->findByEmail($userDTO->email);

        if (!$user) {
            $user = $this->create(new UserRegisterDTO(
                username: $userDTO->username,
                email: $userDTO->email,
                password: $userDTO->password
            ));
        }

        if ($user) {
            try {
                $user->thirdPartyAccounts()->create([
                    'driver' => $userDTO->driver,
                    'driver_user_id' => $userDTO->driverUserId,
                    'token' => $userDTO->token,
                ]);
            } catch (\Exception $error) {
                Log::error('User third party account creation failed: ' . $error->getMessage());
            }
        }

        return $user;
    }
}
