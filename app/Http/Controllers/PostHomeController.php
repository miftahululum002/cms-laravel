<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostHomeController extends Controller
{
    protected $directory = 'Home/Post';
    protected $isHome = true;
    public function index()
    {
        $this->data['title'] = 'Blog';
        return $this->render('Index');
    }
}
