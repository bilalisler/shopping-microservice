<?php

namespace App\Repository;

use App\Models\Category;

class CategoryRepository
{
    public static function findBySlug(string $slug)
    {
        return Category::query()->where('slug', $slug)->firstOrFail();
    }

    public static function update($slug, array $data)
    {
        $category = Category::query()->where('slug', $slug)->firstOrFail();

        foreach ($data as $property => $value) {
            $category->{$property} = $value;
        }

        $category->save();
    }

    public static function delete($slug)
    {
        $category = Category::query()->where('slug', $slug)->firstOrFail();

        $category->delete();
    }
}
