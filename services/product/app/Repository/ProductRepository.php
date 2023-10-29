<?php

namespace App\Repository;

use App\Models\Product;

class ProductRepository
{
    public static function findBySlug(string $slug)
    {
        return Product::query()->where('slug', $slug)->firstOrFail();
    }

    public static function update($slug, array $data)
    {
        $product = Product::query()->where('slug', $slug)->firstOrFail();

        foreach ($data as $property => $value) {
            $product->{$property} = $value;
        }

        $product->save();
    }

    public static function delete($slug)
    {
        $product = Product::query()->where('slug', $slug)->firstOrFail();

        $product->delete();
    }
}
