<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostCategory extends Model
{
    use HasFactory;
    protected $table = 'posts_categories';
    protected $fillable = [
        'post_id',
        'category_id',
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
