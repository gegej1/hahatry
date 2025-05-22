import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ProjectModel from '@/models/project';

// 获取所有项目
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    console.error('获取项目列表失败:', error);
    return NextResponse.json(
      { success: false, error: '获取项目列表失败' },
      { status: 500 }
    );
  }
}

// 创建新项目
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    
    // 验证请求数据
    if (!body.title || !body.type) {
      return NextResponse.json(
        { success: false, error: '标题和类型是必填的' },
        { status: 400 }
      );
    }
    
    // 创建新项目
    const project = await ProjectModel.create(body);
    
    return NextResponse.json(
      { success: true, data: project },
      { status: 201 }
    );
  } catch (error) {
    console.error('创建项目失败:', error);
    return NextResponse.json(
      { success: false, error: '创建项目失败' },
      { status: 500 }
    );
  }
} 