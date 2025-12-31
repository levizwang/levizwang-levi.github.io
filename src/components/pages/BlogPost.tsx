import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/posts';
import { SectionDivider } from '../SectionDivider';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="relative z-30 max-w-4xl pb-1 mx-auto mt-10 bg-white dark:bg-neutral-950 md:rounded-t-md text-neutral-900 min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 dark:text-neutral-100">文章未找到</h1>
        <Link to="/posts" className="text-blue-500 hover:underline">返回文章列表</Link>
      </div>
    );
  }

  return (
    <div className="relative z-30 max-w-4xl pb-1 mx-auto mt-10 bg-white dark:bg-neutral-950 md:rounded-t-md text-neutral-900">
      <div className="relative flex flex-col px-5 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800">
        
        <header className="max-w-2xl mx-auto w-full mb-8">
          <div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
            {post.date} · {post.category}
            {post.tags && ` · #${post.tags.join(' #')}`}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl dark:text-neutral-100 leading-tight">
            {post.title}
          </h1>
        </header>

        {post.image && (
          <div className="max-w-3xl mx-auto w-full mb-10">
             <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-sm"
              />
          </div>
        )}

        <article className="w-full max-w-2xl mx-auto prose prose-neutral dark:prose-invert lg:prose-lg px-2 lg:px-0 mb-20">
            <p className="lead">{post.excerpt}</p>
            <hr />
            <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-center text-neutral-500 dark:text-neutral-400">
                <p>文章内容加载中...</p>
                <p className="text-sm mt-2">（这是一个通用文章详情页模板，实际内容需从后端或 Markdown 文件加载）</p>
            </div>
        </article>

        <SectionDivider label="End" />
        
        <div className="flex justify-center mb-10">
             <Link to="/posts" className="px-6 py-2 border rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors dark:text-neutral-300 border-neutral-200 dark:border-neutral-700">
                返回文章列表
             </Link>
        </div>

      </div>
    </div>
  );
}
