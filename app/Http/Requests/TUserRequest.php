<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'gender' => 'required',
            'name' => 'required',
            'location' => 'required',
            'email' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'gender.required' => 'The Gender field is required.' ,
        ];
    }
}
