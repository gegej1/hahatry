'use client';

import { useState, useEffect } from 'react';
import { ProjectCard } from '@/components/project-card';
import { IProject } from '@/models/project';

// 默认项目数据，当API加载失败时显示
const defaultProjects = [
  {
    _id: '1',
    title: '将任何内容变成网站！',
    type: 'website' as const,
  },
  {
    _id: '2',
    title: 'Python Programming for Beginners',
    type: 'programming' as const,
  },
  {
    _id: '3',
    title: 'Web App for Night Sky Events',
    type: 'webapp' as const,
  },
];

// 项目数据接口，确保有_id属性
interface ProjectWithId extends Partial<IProject> {
  _id: string;
}

export function ProjectList() {
  const [projects, setProjects] = useState<ProjectWithId[]>(defaultProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/projects');
        
        if (!response.ok) {
          throw new Error(`API返回状态码: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          setProjects(data.data);
        }
      } catch (err) {
        console.error('获取项目失败:', err);
        setError('无法加载项目，显示默认数据');
        // 保留默认数据
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {loading ? (
        <div className="col-span-full text-center py-10">
          <p className="text-gray-500">正在加载项目...</p>
        </div>
      ) : (
        <>
          {error && (
            <div className="col-span-full mb-4">
              <p className="text-amber-500 text-sm">{error}</p>
            </div>
          )}
          
          {projects.map((project) => (
            <ProjectCard 
              key={project._id}
              title={project.title || '无标题项目'} 
              type={project.type || 'custom'} 
            />
          ))}
        </>
      )}
    </div>
  );
} 