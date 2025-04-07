<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    
    public function rules(): array
    {
        return [
            'email' => ['bail', 'required', 'email'],
            'password' => ['bail', 'required', 'string', 'min:8'],
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Email is required',
            'email.email' => 'Invalid email',
            'password.required' => 'Password is required',
            'password.string' => 'Password is in an invalid format',
            'password.min' => 'Password must be at least 8 characters',
        ];
    }
}
