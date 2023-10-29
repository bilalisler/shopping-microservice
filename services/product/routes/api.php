<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('product')->group(function () {
    Route::get('/', [ProductController::class, 'show']);
});

Route::prefix('category')->group(function () {
    Route::get('/', [CategoryController::class, 'show']);
});

Route::prefix('brand')->group(function () {
    Route::get('/', [BranchController::class, 'show']);
});
