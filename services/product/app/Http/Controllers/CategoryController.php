<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\DeleteCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Repository\CategoryRepository;
use Illuminate\Support\Arr;

class CategoryController extends Controller
{
    public function list()
    {
        return response(
            CategoryResource::collection(
                Category::all()
            )
        );
    }

    public function show($slug)
    {
        return response(
            CategoryResource::make(
                CategoryRepository::findBySlug($slug)
            )
        );
    }

    public function products($slug)
    {
        /**
         * @var $category Category
         */
        $category = CategoryRepository::findBySlug($slug);

        return response(
            ProductResource::collection(
                $category->products
            )
        );
    }

    public function create(CreateCategoryRequest $request)
    {
        Category::create($request->validated());

        return response()->json(['message' => 'success']);
    }

    public function update(UpdateCategoryRequest $request)
    {
        CategoryRepository::update(
            $request->validated('slug'),
            Arr::except($request->validated(),'slug')
        );

        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteCategoryRequest $request)
    {
        CategoryRepository::delete(
            $request->validated('slug')
        );

        return response()->json(['message' => 'success']);
    }
}
