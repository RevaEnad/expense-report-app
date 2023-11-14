<?php

namespace App\Http\Controllers;
use App\Models\Expense;
use Illuminate\Http\JsonResponse;

use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index(){
        $expenses = Expense::latest()->get();
        return response()->json($expenses);
    }

    public function store( Request $request){
        $expense = Expense::create($request->all());
        return response()->json($expense);
    }
    
    public function show(){}
    
    public function update(){}
    
    public function destroy(){}
}
