<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $table = 'posts';
    protected $fillable = [
        'title',
        'slug',
        'content',
        'image',
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

    public function categories_data()
    {
        return $this->belongsToMany(Category::class, 'posts_categories', 'post_id', 'category_id');
    }

    public function author()
    {
        return $this->hasOne(User::class, 'id', 'created_by');
    }
}
