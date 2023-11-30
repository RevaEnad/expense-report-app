<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except(['index', 'logout']);
    }

    public function index(): JsonResponse
    {
        return response()->json(auth()->user());
    }

    public function store(AuthRequest $request): mixed
    {
        return User::create($request->all());
    }

    public function login(LoginRequest$request): JsonResponse
    {
        $credentials = $request->validated();
        $user = null;
        if (auth()->attempt($credentials)) {
            /** @var User $user */
            $user = auth()->user();
            $user->first();

            $user->access_token = $user->createToken('access_token')->plainTextToken;

            return response()->json([
                'role' => $user->roles->first()->name,
                'access_token' => $user->access_token,
                'token_type' => 'Bearer',
            ]);
        } else {
            return response()->json([
                "errors" => ["Invalid Credentials"]
            ], 500);
        }

    }

    public function logout()
    {
        $user = auth()->user();

        return response()->json($user->tokens()->delete());
    }
}
