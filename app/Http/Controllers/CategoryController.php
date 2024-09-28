<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    protected $directory = 'Category';

    public function index()
    {
        $this->data['title'] = 'Post Categories';
        $this->data['categories'] = getAllCategories();
        return $this->render('Index');
    }

    public function create()
    {
        $this->data['title'] = 'Add New Post Category';
        return $this->render('Create');
    }

    public function store(CategoryStoreRequest $request)
    {
        $input = $request->validated();
        $data = $input;
        $data['slug'] = getSlug($data['name']);
        $category = getCategoryBySlug($data['slug']);
        if ($category) {
            throw ValidationException::withMessages(['name' => 'Kategori sudah ada']);
        }

        $userId = getUserLoginId();
        $data['created_by'] = $userId;
        try {
            createCategory($data);
            setActivityLog('Create Post Category', $userId, $data);
            return redirect(route('dashboard.categories.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.categories.create'))->withErrors($e->getMessage());
        }
    }

    public function edit(Category $category)
    {
        $this->data['category'] = $category;
        $this->data['title'] = "Edit Post Category";
        return $this->render('Edit');
    }

    public function update(CategoryUpdateRequest $request)
    {
        $input = $request->validated();
        $data = $input;
        $id = $data['id'];
        $data['slug'] = getSlug($data['name']);
        $category = getCategoryBySlug($data['slug'], $id);
        if ($category) {
            throw ValidationException::withMessages(['name' => 'Kategori sudah ada']);
        }
        $userId = getUserLoginId();
        $data['updated_by'] = $userId;
        try {
            updateCategory($id, $data);
            setActivityLog('Update post category:' . $id, $userId, $data);
            return redirect(route('dashboard.categories.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.categories.edit', [$id]))->withErrors($e->getMessage());
        }
    }

    public function destroy(Request $request)
    {
        $id = $request->id;
        try {
            deleteCategory($id);
            setActivityLog('Delete post category:' . $id, null, null);
            return redirect(route('dashboard.categories.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.categories.index'))->withErrors($e->getMessage());
        }
    }

    public function activate(Request $request)
    {
        $id = $request->id;
        try {
            updateCategory($id, getDataRestoreData());
            setActivityLog('Restore post category:' . $id, null, null);
            return redirect(route('dashboard.categories.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.categories.index'))->withErrors($e->getMessage());
        }
    }
}
