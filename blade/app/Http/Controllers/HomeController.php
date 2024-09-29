<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    protected $directory = 'Home';
    protected $isHome = true;

    public function index()
    {
        $this->data['title'] = 'Beranda';
        $posts = getLatestPost(3);
        $this->data['posts'] = $posts;
        return $this->render('Index');
    }

    public function about()
    {
        $this->data['title'] = 'Tentang Kami';
        return $this->render('About');
    }

    public function contact()
    {
        $this->data['title'] = 'Hubungi Kami';
        return $this->render('Contact');
    }
}
