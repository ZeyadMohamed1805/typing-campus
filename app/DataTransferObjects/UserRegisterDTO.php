<?php

namespace App\DataTransferObjects;

class UserRegisterDTO
{
    public function __construct(
        public string $username,
        public string $email,
        public string $password
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            $data['username'],
            $data['email'],
            $data['password']
        );
    }
}
