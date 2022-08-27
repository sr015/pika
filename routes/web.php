<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dash', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/todos', TodoController::class)->names([
    'index' => 'todo.index',
    'destroy' => 'todo.destroy',
    'create' => 'todo.create',
    'store'=> 'todo.store',
    'edit'=>'todo.edit',
    'update'=>'todo.update'
    ]);

Route::get('/stop', function () {
    return Inertia::render('Rstopwatch');})->name('stopwatch');
    
Route::get('/cal', function () {
    return Inertia::render('Calendar');})->name('cale');

Route::get('/count', function () {
    return Inertia::render('Rcountdown');})->name('countdown');

require __DIR__.'/auth.php';
