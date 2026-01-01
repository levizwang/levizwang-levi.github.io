import React from 'react';
import { BlogList } from '../BlogList';

export function Post() {
  return (
    <div className="relative z-30 max-w-4xl pb-1 mx-auto mt-10 bg-transparent dark:bg-background md:rounded-t-md text-neutral-900">
      <div className="relative flex flex-col px-5 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800">
        <BlogList />
      </div>
    </div>
  );
}
