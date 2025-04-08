<?php

namespace App\Services;

use App\DataTransferObjects\ThirdPartyUserLoginDTO;
use App\DataTransferObjects\UserLoginDTO;
use App\DataTransferObjects\UserRegisterDTO;
use App\Models\User;
use App\Repositories\ThirdPartyUserRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class AuthService
{
    public function __construct(
        protected UserRepository $userRepository,
        protected ThirdPartyUserRepository $thirdPartyUserRepository
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

    public function thirdPartyLogin(string $driver): string|null
    {
        $error = null;

        $thirdPartyUser = Socialite::driver($driver)->user();
        
        $toBeFoundThirdPartyUser = $this->thirdPartyUserRepository->findByDriverInfo($driver, $thirdPartyUser->getId());
        $isThirdPartyUserFound = $toBeFoundThirdPartyUser;

        if ($isThirdPartyUserFound) {
            $toBeLoggedInUser = $toBeFoundThirdPartyUser->user;
        } else {
            $toBeLoggedInUser = $this->userRepository->createWithThirdParty(new ThirdPartyUserLoginDTO(
                username: $thirdPartyUser->getName(),
                email: $thirdPartyUser->getEmail(),
                password: uniqid(),
                driver: $driver,
                driverUserId: $thirdPartyUser->getId(),
                token: $thirdPartyUser->token
            ));
        }

        if (!$toBeLoggedInUser) {
            $error = 'Third Party Login failed One.';
            return $error;
        }

        Auth::login($toBeLoggedInUser);

        return $error;
    }
}