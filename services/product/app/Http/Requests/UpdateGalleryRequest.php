<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGalleryRequest extends FormRequest
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
            'id' => 'required|exists:App\Models\Gallery,id',
//            'product_id' => 'nullable|exists:App\Models\Product,id',
            'image_path' => 'nullable|string',
            'thumbnail' => 'nullable|boolean',
            'display_order' => 'nullable|integer',
        ];
    }
}
