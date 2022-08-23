<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreStudyRequest;
use App\Http\Requests\UpdateStudyRequest;
use Inertia\Inertia;
use App\Models\Todo;

class TodoController extends Controller
{
     public function index()
    {
    return Inertia::render('Todo' , ['todos' => Todo::all()]);
    }
    
    public function destroy(Todo $todo)
    {
        $todo->delete();
        return redirect()->route('todo.index');
    }
    public function create(){
        return Inertia::render('Create');
    }
    public function store(Request $request){
        $request->validate([
            'body' =>['required'],
            ]);
            
        Todo::create($request->all());
            
        return redirect()->route('todo.index');
    }
    public function edit(Todo $todo)
    {
        return Inertia::render('Edit', ['todo'=>$todo]);
    }
    public function update(Request $request, Todo $todo)
    {
        $request->validate([
            'body' => ['required']]);
            $todo -> update($request->all());
            return redirect()->route('todo.index');
    }
}
