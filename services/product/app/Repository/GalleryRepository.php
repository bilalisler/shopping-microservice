<?php

namespace App\Repository;

use App\Models\Gallery;
use App\Models\Product;

class GalleryRepository
{
    public static function find(int $id)
    {
        return Gallery::query()->where('id', $id)->firstOrFail();
    }

    public static function create($productId, array $galleryData)
    {
        $product = Product::findOrFail($productId);

        $gallery = new Gallery($galleryData);

        $product->galleries()->save($gallery);
    }

    public static function update($id, array $galleryData)
    {
        $gallery = Gallery::findOrFail($id);

        foreach ($galleryData as $property => $value) {
            $gallery->{$property} = $value;
        }

        $gallery->save();
    }

    public static function delete($slug)
    {
        $category = Gallery::query()->where('slug', $slug)->firstOrFail();

        $category->delete();
    }
}
