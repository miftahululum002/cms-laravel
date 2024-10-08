<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Models\Post;
use Exception;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $directory = 'Post';
    public function index()
    {
        $posts = Post::where('is_deleted', '0')->with('categories_data')->paginate(3);
        $this->data['posts'] = $posts;
        $this->data['title'] = 'Posts';
        return $this->render('Index');
    }

    public function create()
    {
        $this->data['title'] = 'Add New Post';
        $this->data['categories'] = getCategories();
        return $this->render('Create');
    }

    public function store(PostStoreRequest $request)
    {
        $input = $request->validated();
        $data = $input;
        $data['slug'] = getSlug($input['title']);
        $userId = getUserLoginId();
        $data['created_by'] = $userId;
        if ($request->hasFile('image')) {
            $data['image'] = uploadImagePost($request->file('image'));
        }

        try {
            $process = createPost($data);
            if (!$process['success']) {
                setActivityLog('Create post', $userId, $data);
                return redirect(route('dashboard.posts.create'))->with('error', $process['error']);
            }
            return redirect(route('dashboard.posts.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.posts.create'))->with('error', $e->getMessage());
        }
    }

    public function show(Post $post)
    {
        $this->data['title'] = 'Detail Post';
        $data = $post;
        $postCategories = $post->categories_data;

        $catId = array_map(function ($cat) {
            return $cat['id'];
        }, $postCategories->toArray());
        $data->categories_data = $postCategories;
        $data->categories = $catId;
        $this->data['post'] = $data;
        $this->data['categories'] = getCategories();
        return $this->render('Show');
    }

    public function edit(Post $post)
    {
        $this->data['title'] = 'Edit Post';
        $data = $post;
        $postCategories = $post->categories_data;

        $catId = array_map(function ($cat) {
            return $cat['id'];
        }, $postCategories->toArray());
        $data->categories_data = $postCategories;
        $data->categories = $catId;
        $this->data['post'] = $data;
        $this->data['categories'] = getCategories();
        return $this->render('Edit');
    }

    public function update(PostUpdateRequest $request)
    {
        $input = $request->validated();
        $data = $input;
        $id = $data['id'];
        $userId = getUserLoginId();
        $data['updated_by'] = $userId;
        unset($data['id']);
        $postData = getPostById($id);
        if ($request->hasFile('image')) {
            $data['image'] = uploadImagePost($request->file('image'), $postData->image);
        }
        try {
            updatePost($id, $data);
            setActivityLog('Update post:' . $id, $userId, $data);
            return redirect(route('dashboard.posts.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.posts.edit', [$id]))->withErrors($e->getMessage());
        }
    }

    public function destroy(Request $request)
    {
        $input = $request->validate(['id' => 'required']);
        try {
            deletePost($input['id']);
            setActivityLog('Delete post:' . $input['id'], null, $input);
            return redirect(route('dashboard.posts.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.posts.index'))->withErrors($e->getMessage());
        }
    }
}
