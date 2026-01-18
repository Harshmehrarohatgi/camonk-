import { useQuery } from '@tanstack/react-query';
import { Card } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { Blog } from '../types/blog';
import { Calendar, Tag, Clock } from 'lucide-react';

interface BlogDetailProps {
  blogId: string | null;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useQuery<Blog>({
    queryKey: ['blog', blogId],
    queryFn: async () => {
      if (!blogId) throw new Error('No blog selected');
      const response = await fetch(`http://localhost:3001/blogs/${blogId}`);
      if (!response.ok) throw new Error('Failed to fetch blog');
      return response.json();
    },
    enabled: !!blogId,
  });

  if (!blogId) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center max-w-md">
          <div className="bg-muted/50 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Tag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Select a blog to read</h3>
          <p className="text-muted-foreground">
            Choose an article from the list to view its full content
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <Card className="p-12 text-center border-destructive/50">
        <div className="text-destructive mb-4">
          <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Failed to load blog</h3>
        <p className="text-muted-foreground">
          {error instanceof Error ? error.message : 'An error occurred'}
        </p>
      </Card>
    );
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(blog.date));

  return (
    <article className="space-y-8">
      {/* Cover Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          {blog.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground py-4 border-y">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {blog.category.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/15 text-primary"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 py-2">
        {blog.description}
      </p>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="space-y-6 text-base leading-relaxed">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Tags */}
      {blog.category.length > 0 && (
        <div className="pt-8 border-t">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            {blog.category.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-muted hover:bg-muted/80 transition-colors"
              >
                <Tag className="h-3.5 w-3.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
