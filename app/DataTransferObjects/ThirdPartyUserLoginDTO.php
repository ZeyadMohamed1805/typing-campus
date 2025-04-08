<?php

namespace App\DataTransferObjects;

class ThirdPartyUserLoginDTO
{
    public function __construct(
        public string $username,
        public string $email,
        public string $password,
        public string $driver,
        public string $driverUserId,
        public string $token
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            $data['username'],
            $data['email'],
            $data['password'],
            $data['driver'],
            $data['driver_user_id'],
            $data['token']
        );
    }
}
