<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'quantity', 'description'];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function galleries(): MorphToMany
    {
        return $this->morphToMany(Gallery::class, 'galleryable');
    }

    protected static function booted(): void
    {
        static::updating(function (Product $product) {
            $product->slug = Str::slug($product->name);
        });

        static::creating(function (Product $product) {
            $product->slug ??= Str::slug($product->name);
//            $product->created_by ??= auth()->user()?->fullName;
        });

        parent::boot();
    }
}
