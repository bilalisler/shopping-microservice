<?php

namespace Database\Seeders;

use App\Models\gallery;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Gallery::factory(10)->create();
    }
}
