<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AuthThirdPartyLoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    
    public function rules(): array
    {
        return [
            'driver' => ['required', 'string', Rule::in(config('oauth.drivers'))],
        ];
    }

    public function messages(): array
    {
        return [
            'driver.required' => 'The driver field is required.',
            'driver.string' => 'The driver field must be a string.',
            'driver.in' => 'The selected driver is not supported.'
        ];
    }
}
