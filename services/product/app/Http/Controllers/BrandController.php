<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBrandRequest;
use App\Http\Requests\DeleteBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use App\Repository\BrandRepository;
use Illuminate\Support\Arr;

class BrandController extends Controller
{

    public function list()
    {
        return response(
            BrandResource::collection(
                Brand::all()
            )
        );
    }

    public function show($slug)
    {
        return response(
            BrandResource::make(
                BrandRepository::findBySlug($slug)
            )
        );
    }

    public function create(CreateBrandRequest $request)
    {
        Brand::create($request->validated());

        return response()->json(['message' => 'success']);
    }

    public function update(UpdateBrandRequest $request)
    {
        BrandRepository::update(
            $request->validated('slug'),
            Arr::except($request->validated(),'slug')
        );

        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteBrandRequest $request)
    {
        BrandRepository::delete(
            $request->validated('slug')
        );

        return response()->json(['message' => 'success']);
    }
}
