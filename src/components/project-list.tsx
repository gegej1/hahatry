import React from 'react';
import { ProjectCard } from '@/components/project-card';

const projectsData = [
  {
    id: 1,
    title: '将任何内容变成网站！',
    type: 'website' as const,
  },
  {
    id: 2,
    title: 'Python Programming for Beginners',
    type: 'programming' as const,
  },
  {
    id: 3,
    title: 'Web App for Night Sky Events',
    type: 'webapp' as const,
  },
];

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {projectsData.map((project) => (
        <ProjectCard 
          key={project.id}
          title={project.title} 
          type={project.type} 
        />
      ))}
    </div>
  );
} 