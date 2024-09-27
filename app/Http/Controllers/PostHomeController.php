<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostHomeController extends Controller
{
    protected $directory = 'Home/Post';
    protected $isHome = true;

    public function index(Request $request)
    {
        $category = !empty($request->category) ? $request->category : null;
        $cat = getCategoryBySlug($category);
        $categoryId = $cat ? $cat->id : null;
        $posts = getPostForHome($categoryId, 4);
        $title = 'Blog ';
        if (!empty($cat)) {
            $title .= $cat->name;
        }

        $this->data['title'] = $title;
        $this->data['posts'] = $posts;
        return $this->render('Index');
    }

    public function read($slug = null)
    {
        $post = getPostBySlug($slug);
        $this->data['title'] = $post->title;
        $this->data['post'] = $post;
        return $this->render('Read');
    }
}
