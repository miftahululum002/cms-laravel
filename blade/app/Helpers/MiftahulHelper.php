<?php

use App\Models\ActivityLog;
use App\Models\Category;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Support\Facades\Storage;
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
    $categories = !empty($data['categories']) ? $data['categories'] : null;
    unset($data['categories']);
    $postData = Post::find($id);
    $cat = $postData->categories_data;
    $catId = null;
    if ($cat) {
        $catId = array_map(function ($cat) {
            return $cat['id'];
        }, $cat->toArray());
    }
    $deletedCategories = null;
    if (!empty($catId) && !empty($categories)) {
        $deletedCategories = array_udiff($catId, $categories, function ($a, $b) {
            return $a == $b ? 0 : ($a > $b ? 1 : -1);
        });
    }

    try {
        Post::where('id', $id)->update($data);
        if (!empty($deletedCategories)) {
            deletePostCategoryIn($id, $deletedCategories);
        }
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
    return Category::where('is_deleted', '0')->get();
}

function getAllCategories()
{
    return Category::all();
}

function getCategoryBySlug($slug, $exceptId = null)
{
    return Category::where('slug', $slug)
        ->where(function ($query) use ($exceptId) {
            if (!empty($exceptId)) {
                $query->where('id', '<>', $exceptId);
            }
        })
        ->first();
}

function deletePost($id)
{
    return Post::where('id', $id)->update(['is_deleted' => '1', 'deleted_at' => date('Y-m-d H:i:s')]);
}

function getPostById($id)
{
    return getPostQuery(['id' => $id], true);
}

function getPostForHome($category = null, $limit = 4)
{
    if ($category) {
        return Post::where('is_deleted', '0')->whereHas('categories_data', function ($query) use ($category) {
            $query->where('category_id', $category);
        })->orderBy('created_at', 'DESC')->limit($limit)->get();
    }
    return getLatestPost($limit);
}

function getLatestPost($limit = 4)
{
    return Post::where('is_deleted', '0')->orderBy('created_at', 'DESC')->limit($limit)->get();
}

function getPostBySlug($slug)
{
    return getPostQuery(['slug' => $slug], true);
}

function getPostQuery($where, $single = true)
{
    if ($single) {
        return Post::where($where)->where('is_deleted', '0')->first();
    }
    return Post::where($where)->where('is_deleted', '0')->get();
}

function uploadImagePost($file, $imageOld = null)
{
    return uploadFile($file, 'images/posts', $imageOld);
}

function uploadFile($file, $directory = 'images', $oldFile = null)
{
    $data = $file->store($directory);
    if ($oldFile) {
        Storage::delete($oldFile);
    }
    return $data;
}

function createCategory($data)
{
    return Category::create($data);
}

function updateCategory($id, $data)
{
    return Category::where('id', $id)->update($data);
}

function deleteCategory($id)
{
    return Category::where('id', $id)->update(getDataForDeleteData());
}

function setActivityLog($activity, $userId = null, $data = null)
{
    if (empty($userId)) {
        $userId = getUserLoginId();
    }
    $object = [
        'activity' => $activity,
        'user_id' => getUserLoginId(),
        'page_url' => url()->current(),
        'data' => $data,
        'created_by' => getUserLoginId(),
    ];
    return createActiviyLog($object);
}

function getUserAgent()
{
    return request()->header('User-Agent');
}

function getIp()
{
    return request()->ip();
}

function createActiviyLog($data)
{
    $data['ip_address'] = getIp();
    if (!empty($data['data'])) {
        $data['data'] = json_encode($data['data']);
    }
    $data['user_agent'] = getUserAgent();
    return ActivityLog::create($data);
}

function getDataForDeleteData()
{
    return getDataForForm('delete');
}

function getDataRestoreData()
{
    return getDataForForm('restore');
}

function getDataForForm($action = 'delete')
{
    if (!in_array($action, ['delete', 'restore'])) {
        return;
    }
    $userId = getUserLoginId();
    $data = [
        'is_' . $action . 'd' => '1',
        $action . 'd_at' => date('Y-m-d H:i:s'),
        $action . 'd_by' => $userId,
    ];
    if ($action == 'restore') {
        $data['is_deleted'] = '0';
        $data['deleted_at'] = null;
        $data['deleted_by'] = null;
    }
    return $data;
}
