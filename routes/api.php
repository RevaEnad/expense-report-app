<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExpenseController;
use Illuminate\Http\Request;
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

//This is example only
Route::get('test', function (Request $request) {
    return 'Hello world!';
});

Route::controller(AuthController::class)->group(function() {
    Route::post('register', 'store');
    Route::post('auth/login', 'login');

    Route::middleware('auth:sanctum')->group(function() {
        Route::get('auth', 'index');
        Route::post('auth/logout', 'logout');
    });

    Route::middleware('auth:sanctum')->group(function() {
        Route::apiResource('expense', ExpenseController::class);
    });
});
