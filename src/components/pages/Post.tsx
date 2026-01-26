import React from 'react';
import { BlogList } from '../BlogList';
import { PageLayout } from '../PageLayout';

export function Post() {
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4 text-gray-900 dark:text-gray-100">
          Posts
        </h1>
        <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 tracking-wide">
          Writing about code, design, and life.
        </p>
      </div>
      <BlogList showViewAll={false} />
    </PageLayout>
  );
}
