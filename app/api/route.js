import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await ConnectDB();
        const todos = await TodoModel.find({});
        return NextResponse.json({ todos });
    } catch (error) {
        return NextResponse.json({ error: "Failed to load todos" }, { status: 500 });
    }
}

export async function POST(request) {
    const {title,description}=await request.json();
    await TodoModel.create({
        title,
        description
    })
    return (
        NextResponse.json({msg:"Todo Created"})
    )
}

export async function DELETE(request) {
    const mongoId=await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndDelete(mongoId);
    return (
        NextResponse.json({msg:"Todo Deleted"})
    )
}

export async function PUT(request) {
    const mongoId=await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted:true
        }
    });
    return (
        NextResponse.json({msg:"Todo Completed"})
    )
}