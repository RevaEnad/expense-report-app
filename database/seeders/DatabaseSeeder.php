<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::insert([
            ['name'=>'employee'],
            ['name'=>'admin'],
        ]);

        $first_user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        RoleUser::create([
            'user_id' => $first_user->id,
            'role_id' => 1
        ]);

        $admin_user = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);

        RoleUser::create([
            'user_id' => $admin_user->id,
            'role_id' => 2
        ]);

    }
}