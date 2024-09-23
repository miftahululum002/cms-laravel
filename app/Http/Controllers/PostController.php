<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $directory = 'Post';
    public function index()
    {
        $this->data['posts'] = Post::all();
        return $this->render('Index');
    }
}
