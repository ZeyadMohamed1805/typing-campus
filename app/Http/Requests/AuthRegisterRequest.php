<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    
    public function rules(): array
    {
        return [
            'username' => ['bail', 'required', 'string', 'min:8', 'unique:users,username'],
            'email' => ['bail', 'required', 'email', 'unique:users,email'],
            'password' => ['bail', 'required', 'string', 'min:8', 'confirmed'],
        ];
    }

    public function messages(): array
    {
        return [
            'username.required' => 'Username is required',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'username.string' => 'Username is in an invalid format',
            'password.string' => 'Password is in an invalid format',
            'username.min' => 'Username must be at least 8 characters',
            'password.min' => 'Password must be at least 8 characters',
            'email.email' => 'Invalid email',
            'email.unique' => 'Email is already taken',
            'username.unique' => 'Username is already taken',
            'password.confirmed' => 'Passwords do not match',
        ];
    }
}
