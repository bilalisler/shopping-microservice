<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'slug' => 'required|exists:App\Models\Product',
            'name' => 'nullable|string',
            'price' => 'nullable|integer|gt:0',
            'quantity' => 'nullable|integer|gt:0',
            'description' => 'nullable|string',
        ];
    }
}
