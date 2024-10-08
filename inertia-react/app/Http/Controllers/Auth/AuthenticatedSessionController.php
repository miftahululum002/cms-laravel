<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class AuthenticatedSessionController extends Controller
{
    protected $directory = 'Auth';
    /**
     * Display the login view.
     */
    public function create(Request $request)
    {
        if ($request->user()) {
            return redirect()->route('dashboard.index');
        }
        $this->data['canResetPassword'] = Route::has('password.request');
        $this->data['status'] = session('status');
        $this->data['title'] = 'Login';
        return $this->render('Login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        // setSession('is_login', true);
        $request->session()->put('is_login', true);
        setActivityLog('Login', null, ['email' => $request->email]);
        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        setActivityLog('Logout', null, null);
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
