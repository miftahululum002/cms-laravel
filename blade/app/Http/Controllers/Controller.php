<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

abstract class Controller
{
    protected $directory = null;
    protected $isHome = false;
    protected $data = [];

    protected function render($filename)
    {
        $this->setDataHook();
        return Inertia::render($this->getView($filename), $this->data);
    }

    protected function getView($filename)
    {
        return !empty($this->directory) ? $this->directory . '/' . $filename : $filename;
    }

    private function setDataHook()
    {

        if ($this->isHome) {
            $this->data['home_categories'] = getCategories();
            // $this->data['is_login'] = getSession('is_login');
        }
        $this->data['author'] = config('miftahululum.author');
    }
}
