<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{

    public function home()
    {
        return view('layout');
    }

    public function print()
    {
        return view('print');
    }

    public function it()
    {
        return view('it');
    }

    public function cv()
    {
        return view('cv');
    }
}
