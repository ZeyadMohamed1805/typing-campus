<?php

namespace App\DataTransferObjects;

class UserRegisterDTO
{
    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $email,
        public string $password
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            $data['first_name'],
            $data['last_name'],
            $data['email'],
            $data['password']
        );
    }
}
