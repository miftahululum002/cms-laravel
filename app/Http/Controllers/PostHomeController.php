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
        $subtitle = 'Tulisan Terbaru';
        if (!empty($cat)) {
            $title .= $cat->name;
            $subtitle = "Tulisan Kategori: $cat->name";
        }
        $this->data['title'] = $title;
        $this->data['subtitle'] = $subtitle;
        $this->data['posts'] = $posts;
        return $this->render('Index');
    }

    public function read($slug = null)
    {
        $post = getPostBySlug($slug);
        if (!$post) {
            return redirect()->route('home.blog.index');
        }
        $this->data['title'] = $post->title;
        $this->data['post'] = $post;
        return $this->render('Read');
    }
}
