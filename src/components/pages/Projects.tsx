import React from 'react';
import { ProjectGrid } from '../ProjectGrid';
import { PageLayout } from '../PageLayout';

export function Projects() {
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4 text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 tracking-wide">
          A collection of my work and experiments.
        </p>
      </div>
       <ProjectGrid showViewAll={false} />
    </PageLayout>
  );
}
