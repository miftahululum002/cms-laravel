<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lists = [
            [
                'title' => 'Example Post 1',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime non voluptas velit natus aperiam harum et saepe quam earum? Porro autem, animi quos in nisi officia, ducimus dignissimos ullam modi, minima veniam eius? Reiciendis neque asperiores nam, rem nihil sint odio sapiente itaque distinctio deserunt corrupti, non, tempore fugiat.',
                'slug' => getSlug('Example Post 1'),
            ]
        ];
        Post::insert($lists);
    }
}
