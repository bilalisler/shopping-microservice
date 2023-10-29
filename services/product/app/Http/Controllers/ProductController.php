<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\DeleteProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Repository\ProductRepository;
use Illuminate\Support\Arr;

class ProductController extends Controller
{
    public function list()
    {
        return response(
            ProductResource::collection(
                Product::all()
            )
        );
    }

    public function show($slug)
    {
        return response(
            ProductResource::make(
                ProductRepository::findBySlug($slug)
            )
        );
    }

    public function create(CreateProductRequest $request)
    {
        Product::create($request->validated());

        return response()->json(['message' => 'success']);
    }

    public function update(UpdateProductRequest $request)
    {
        ProductRepository::update(
            $request->validated('slug'),
            Arr::except($request->validated(),'slug')
        );

        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteProductRequest $request)
    {
        ProductRepository::delete(
            $request->validated('slug')
        );

        return response()->json(['message' => 'success']);
    }
}
