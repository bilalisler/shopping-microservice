<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateGalleryRequest;
use App\Http\Requests\DeleteGalleryRequest;
use App\Http\Requests\UpdateGalleryRequest;
use App\Http\Resources\GalleryResource;
use App\Models\Gallery;
use App\Repository\GalleryRepository;
use Illuminate\Support\Arr;

class GalleryController extends Controller
{
    public function list()
    {
        return response(
            GalleryResource::collection(
                Gallery::all()
            )
        );
    }

    public function show($slug)
    {
        return response(
            GalleryResource::make(
                GalleryRepository::find($slug)
            )
        );
    }

    public function create(CreateGalleryRequest $request)
    {
        $productId = $request->validated('product_id');

        GalleryRepository::create($productId,Arr::except($request->validated(),'product_id'));

        return response()->json(['message' => 'success']);
    }

    public function update(UpdateGalleryRequest $request)
    {
        GalleryRepository::update(
            $request->validated('id'),
            Arr::except($request->validated(),'id')
        );

        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteGalleryRequest $request)
    {
        GalleryRepository::delete(
            $request->validated('slug')
        );

        return response()->json(['message' => 'success']);
    }
}
