<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = [
        'name',
        'slug',
        'created_by',
        'updated_by',
        'is_deleted',
        'deleted_by',
        'deleted_at',
        'is_restored',
        'restored_by',
        'restored_at'
    ];
    protected $guarded = ['id'];
    public $timestamps = false;
}
