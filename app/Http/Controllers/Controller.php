<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

abstract class Controller
{
    protected $directory = null;
    protected $data = [];

    protected function render($filename)
    {
        return Inertia::render($this->getView($filename), $this->data);
    }
    protected function getView($filename)
    {
        return !empty($this->directory) ? $this->directory . '/' . $filename : $filename;
    }
}
