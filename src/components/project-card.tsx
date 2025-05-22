import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// 项目卡片属性定义
interface ProjectCardProps {
  title: string;
  type: 'website' | 'programming' | 'webapp' | 'custom';
}

/**
 * 项目卡片组件 - 根据类型显示不同的内容
 * @param title 卡片标题
 * @param type 项目类型
 */
export function ProjectCard({ title, type }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {type === 'website' && (
          <div className="flex justify-center mt-4">
            <div className="bg-gray-100 rounded-md p-4 flex justify-center">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-400 rounded flex items-center justify-center text-white">P</div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white">W</div>
                <div className="w-8 h-8 bg-pink-400 rounded flex items-center justify-center text-white">A</div>
                <div className="w-8 h-8 bg-green-400 rounded flex items-center justify-center text-white">X</div>
              </div>
            </div>
          </div>
        )}
        {(type === 'programming' || type === 'webapp') && (
          <div className="aspect-video bg-gray-100 rounded-md mt-2"></div>
        )}
      </CardHeader>
    </Card>
  );
} 