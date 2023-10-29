<?php

namespace App\Repository;

use App\Models\Brand;

class BrandRepository
{
    public static function findBySlug(string $slug)
    {
        return Brand::query()->where('slug', $slug)->firstOrFail();
    }

    public static function update($slug, array $data)
    {
        $category = Brand::query()->where('slug', $slug)->firstOrFail();

        foreach ($data as $property => $value) {
            $category->{$property} = $value;
        }

        $category->save();
    }

    public static function delete($slug)
    {
        $category = Brand::query()->where('slug', $slug)->firstOrFail();

        $category->delete();
    }
}
