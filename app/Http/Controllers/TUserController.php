<?php

namespace App\Http\Controllers;

use App\Http\Requests\TUserRequest;
use App\Models\TUser;
use Illuminate\Http\Request;

class TUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tusers = TUser::orderBy('id','ASC')->get();
        return response()->json($tusers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TUserRequest $request)
    {
        $request->validated();
        TUser::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'TUser Data successfully stored!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tuser = TUser::where('id',$id)->first();
        return response()->json($tuser);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TUserRequest $request, $id)
    {
        $request->validated();
        TUser::where('id', $id)->update($request->all());
        return response()->json([
            'status' => true,
            'message' => 'TUser data successfly updated!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TUser::destroy($id);
        return response()->json('deleted!');
    }
}
