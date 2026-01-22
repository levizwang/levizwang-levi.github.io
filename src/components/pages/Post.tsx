import React from 'react';
import { BlogList } from '../BlogList';
import { PageLayout } from '../PageLayout';

export function Post() {
  return (
    <PageLayout>
      <BlogList />
    </PageLayout>
  );
}
