<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = ['image_path', 'thumbnail','display_order'];

    public function products(): MorphToMany
    {
        return $this->morphedByMany(Product::class, 'galleryable');
    }
}
