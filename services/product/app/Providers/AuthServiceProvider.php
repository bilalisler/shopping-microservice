<?php

namespace App\Providers;

use App\Service\JWT;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Auth::viaRequest('jwt', function (Request $request) {

            if (!($token = $request->header('Authorization'))) {
                throw new AuthenticationException('inval');
            }

            $jwt = str_replace('Bearer ', '', $token);

            return JWT::decode($jwt, 'supersecret')?->_doc;
        });
    }
}
