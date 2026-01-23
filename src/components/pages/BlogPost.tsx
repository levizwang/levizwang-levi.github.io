import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/posts';
import { SectionDivider } from '../SectionDivider';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { PageLayout } from '../PageLayout';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-yaml';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  if (!post) {
    return (
      <PageLayout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-neutral-100">Article Not Found</h1>
          <Link to="/posts" className="text-blue-500 hover:underline">View All Articles</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
        
        <header className="max-w-4xl mx-auto w-full mb-8">
          <div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
            {post.date} · {post.category}
            {post.tags && ` · #${post.tags.join(' #')}`}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl dark:text-neutral-100 leading-tight">
            {post.title}
          </h1>
        </header>

        {post.image && (
          <div className="max-w-4xl mx-auto w-full mb-10">
             <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-sm"
              />
          </div>
        )}

        <article className="w-full max-w-4xl mx-auto prose prose-neutral dark:prose-invert lg:prose-lg px-2 lg:px-0 mb-20">
            <p className="lead">{post.excerpt}</p>
            <hr />
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-center text-neutral-500 dark:text-neutral-400">
                  <p>Content loading...</p>
                  <p className="text-sm mt-2">(This is a generic template, actual content needs to be loaded)</p>
              </div>
            )}
        </article>

        <SectionDivider label="End" />
        
        <div className="flex justify-center mb-10">
             <Link to="/posts" className="px-6 py-2 border rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors dark:text-neutral-300 border-neutral-200 dark:border-neutral-700">
                View All Articles
             </Link>
        </div>

    </PageLayout>
  );
}
