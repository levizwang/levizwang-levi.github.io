import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`relative z-30 max-w-4xl pb-1 mx-auto mt-6 bg-transparent dark:bg-background md:rounded-t-md text-neutral-900 ${className}`}>
      <div className="relative flex flex-col px-5 pt-6 md:pt-10 lg:px-0 justify-stretch md:rounded-t-2xl">
        {children}
      </div>
    </div>
  );
}
