<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

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
            $this->data['auth'] = auth()->user();
            $this->data['home_categories'] = getCategories();
        }
        $this->data['author'] = config('miftahululum.author');
    }
}
