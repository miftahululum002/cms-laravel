<?php

use App\Models\Category;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Support\Str;

function getUserLoginId()
{
    return auth()->user()->id;
}

function getSlug($string)
{
    return Str::slug($string);
}

function createPost($data)
{
    $categories = $data['categories'];
    unset($data['categories']);
    try {
        $post = Post::create($data);
        $postId = $post->id;
        $postCategories = null;
        foreach ($categories as $key => $value) {
            $postCategories[] = [
                'post_id' => $postId,
                'category_id' => $value,
                'created_by' => $data['created_by'],
            ];
        }
        createPostCategories($postCategories);
        return ['success' => true, 'error' => null];
    } catch (Exception $e) {
        return ['success' => false, 'error' => $e->getMessage()];
    }
}

function createPostCategories($data)
{
    return PostCategory::insert($data);
}

function updatePost($id, $data)
{
    $categories = $data['categories'];
    unset($data['categories']);
    $postData = Post::find($id);
    $cat = $postData->categories_data;
    $catId = array_map(function ($cat) {
        return $cat['id'];
    }, $cat->toArray());

    $deletedCategories = array_udiff($catId, $categories, function ($a, $b) {
        return $a == $b ? 0 : ($a > $b ? 1 : -1);
    });

    try {
        Post::where('id', $id)->update($data);
        deletePostCategoryIn($id, $deletedCategories);
        foreach ($categories as $key => $value) {
            createPostCategoryIfNotExists($id, $value, ['updated_by' => $data['updated_by'], 'created_by' => $data['updated_by']]);
        }
        return ['success' => true, 'error' => null];
    } catch (Exception $e) {
        return ['success' => false, 'error' => $e->getMessage()];
    }
}

function createPostCategoryIfNotExists($postId, $categoryId)
{
    return PostCategory::firstOrCreate([
        'post_id' => $postId,
        'category_id' => $categoryId
    ]);
}

function deletePostCategoryIn($postId, $categoryIdIn = null)
{
    return PostCategory::where('post_id', $postId)
        ->where(function ($query) use ($categoryIdIn) {
            if (!empty($categoryIdIn)) {
                $query->whereIn('category_id', $categoryIdIn);
            }
        })
        ->delete();
}
function deletePostCategory($postId)
{
    return PostCategory::where('post_id', $postId)->delete();
}
function getCategories()
{
    return Category::all();
}

function deletePost($id)
{
    return Post::where('id', $id)->update(['is_deleted' => '1', 'deleted_at' => date('Y-m-d H:i:s')]);
}
