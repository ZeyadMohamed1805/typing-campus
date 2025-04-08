<?php

namespace App\Repositories;

use App\Models\ThirdPartyUser;
use Illuminate\Support\Facades\Log;

class ThirdPartyUserRepository
{

    public function findByDriverInfo(string $driver, string $driverUserId): ?ThirdPartyUser
    {
        $foundUser = null;

        try {
            $foundUser = ThirdPartyUser::where('driver', $driver)
            ->where('driver_user_id', $driverUserId)
            ->with('user')
            ->first();
        } catch (\Exception $error) {
            Log::error('User login failed: ' . $error->getMessage());
        }

        return $foundUser;
    }
}
