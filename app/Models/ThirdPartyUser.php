<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class ThirdPartyUser extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'user_id', 
        'driver', 
        'driver_user_id', 
        'token'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
