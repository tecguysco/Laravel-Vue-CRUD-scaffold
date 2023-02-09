<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        for ($i=0; $i <= 30 ; $i++) {
            DB::table('tusers')->insert([
                'gender' => $faker->randomElement($array = array('M', 'F')),
                'name' => $faker->name,
                'location' => $faker->address,
                'email' => $faker->email,
                'phone' => $faker->phoneNumber,
            ]);
        }

    }
}
