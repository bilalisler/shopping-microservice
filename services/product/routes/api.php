<?php

use App\Http\Controllers\BrandController;
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
    Route::get('/list', [ProductController::class, 'list']);
    Route::get('/{slug}', [ProductController::class, 'show']);
    Route::post('/', [ProductController::class, 'store']);
    Route::put('/', [ProductController::class, 'update']);
    Route::delete('/', [ProductController::class, 'destroy']);
});

Route::prefix('category')->group(function () {
    Route::get('/list', [CategoryController::class, 'list']);
    Route::get('/{slug}', [CategoryController::class, 'show']);
    Route::post('/', [CategoryController::class, 'store']);
    Route::put('/', [CategoryController::class, 'update']);
    Route::delete('/', [CategoryController::class, 'destroy']);
});

Route::prefix('brand')->group(function () {
    Route::get('/list', [BrandController::class, 'list']);
    Route::get('/{slug}', [BrandController::class, 'show']);
    Route::post('/', [BrandController::class, 'store']);
    Route::put('/', [BrandController::class, 'update']);
    Route::delete('/', [BrandController::class, 'destroy']);
});
