<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    
    public function rules(): array
    {
        return [
            'first_name' => ['bail', 'required', 'string', 'min:2'],
            'last_name' => ['bail', 'required', 'string', 'min:2'],
            'email' => ['bail', 'required', 'email', 'unique:users,email'],
            'password' => ['bail', 'required', 'string', 'min:8', 'confirmed'],
        ];
    }

    public function messages(): array
    {
        return [
            'first_name.required' => 'First name is required',
            'last_name.required' => 'Last name is required',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'first_name.string' => 'First name is in an invalid format',
            'last_name.string' => 'Last name is in an invalid format',
            'password.string' => 'Password is in an invalid format',
            'first_name.min' => 'First name must be at least 2 characters',
            'last_name.min' => 'Last name must be at least 2 characters',
            'password.min' => 'Password must be at least 8 characters',
            'email.email' => 'Invalid email',
            'email.unique' => 'This email is already taken',
            'password.confirmed' => 'Passwords do not match',
        ];
    }
}
