<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    protected static function booted(): void
    {
        static::updating(function (Brand $model) {
            $model->slug = Str::slug($model->name);
        });

        static::creating(function (Brand $model) {
            $model->slug ??= Str::slug($model->name);
        });

        parent::boot();
    }
}
