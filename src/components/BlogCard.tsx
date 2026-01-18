import { Card } from './ui/card';
import { Blog } from '../types/blog';
import { Calendar, Tag } from 'lucide-react';

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
  isSelected?: boolean;
}

export function BlogCard({ blog, onClick, isSelected }: BlogCardProps) {
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return formattedDate;
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected 
          ? 'ring-2 ring-primary shadow-lg bg-primary/5' 
          : 'hover:border-primary/50'
      }`}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {blog.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                <Tag className="h-3 w-3" />
                {cat}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
          {blog.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
          {blog.description}
        </p>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t">
          <Calendar className="h-3.5 w-3.5" />
          <time>{getTimeAgo(blog.date)}</time>
        </div>
      </div>
    </Card>
  );
}
