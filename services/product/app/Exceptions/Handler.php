<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->renderable(function (UniqueConstraintViolationException $e, Request $request) {
            return response()->json(['message' => 'Product name has been used already'],400);
        });

        $this->renderable(function (Throwable $e, Request $request) {
            return response()->json(['message' => $e->getMessage()]);
        });

        $this->reportable(function (Throwable $e) {
            //@TODO: log sentry or other
        });
    }

    /**
     * @param $request
     * @param AuthenticationException $exception
     * @return Response|JsonResponse|RedirectResponse
     */
    protected function unauthenticated($request, AuthenticationException $exception): \Illuminate\Http\Response|\Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
    {
        return response()->json(['error' => 'Unauthenticated.'], 401);
    }
}
