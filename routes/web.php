<?php

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

Route::get('print', 'PagesController@print')->name('print');
Route::get('it', 'PagesController@it')->name('it');
Route::get('cv', 'PagesController@cv')->name('cv');
Route::get('{catchall}', 'PagesController@home')->name('home')->where('catchall', '(.*)');
