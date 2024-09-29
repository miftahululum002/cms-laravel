<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lists = [
            [
                'name' => 'Programming',
                'slug' => getSlug('Programming')
            ],
            [
                'name' => 'Gaya Hidup',
                'slug' => getSlug('Gaya Hidup')
            ],
            [
                'name' => 'Tutorial',
                'slug' => getSlug('Tutorial')
            ],
        ];

        Category::insert($lists);
    }
}
