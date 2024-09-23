<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    protected $directory = 'Dashboard';

    public function index()
    {
        return $this->render('Index');
    }
}
