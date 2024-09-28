<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;

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
        try {
            createCategory($data);
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
        $data['slug'] = getSlug($data['name']);
        $id = $data['id'];
        try {
            updateCategory($id, $data);
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
            return redirect(route('dashboard.categories.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.categories.index'))->withErrors($e->getMessage());
        }
    }

    public function activate(Request $request)
    {
        $id = $request->id;
        try {
            updateCategory($id, ['is_deleted' => '0', 'is_restored' => '1']);
            return redirect(route('dashboard.categories.index'));
        } catch (Exception $e) {
            return redirect(route('dashboard.categories.index'))->withErrors($e->getMessage());
        }
    }
}
