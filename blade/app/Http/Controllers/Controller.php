<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class Controller
{
    protected $directory = null;
    protected $isHome = false;
    protected $data = [];

    protected function render($filename)
    {
        $this->setDataHook();
        return view($this->getView($filename), $this->data);
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
        $this->data['app_name'] = config('miftahululum.app_name');
        $this->data['author'] = config('miftahululum.author');
    }
}
