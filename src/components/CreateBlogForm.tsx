import { useState } from 'react';
import { useCreateBlog } from '@/hooks/useBlogs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface CreateBlogFormProps {
  onSuccess?: () => void;
}

export function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: '',
    content: '',
  });

  const createBlog = useCreateBlog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const categories = formData.category
      .split(',')
      .map((cat) => cat.trim().toUpperCase())
      .filter(Boolean);

    try {
      await createBlog.mutateAsync({
        title: formData.title,
        category: categories,
        description: formData.description,
        coverImage: formData.coverImage,
        content: formData.content,
      });

      // Reset form
      setFormData({
        title: '',
        category: '',
        description: '',
        coverImage: '',
        content: '',
      });

      onSuccess?.();
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Blog</CardTitle>
        <CardDescription>Fill in the details to create a new blog post</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categories * (comma-separated)</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., FINANCE, TECH"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of your blog"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL *</Label>
            <Input
              id="coverImage"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              placeholder="https://example.com/image.jpg"
              type="url"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your blog content here..."
              rows={10}
              required
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={createBlog.isPending}>
              {createBlog.isPending ? 'Creating...' : 'Create Blog'}
            </Button>
            {createBlog.isSuccess && (
              <p className="text-sm text-green-600 flex items-center">
                ✓ Blog created successfully!
              </p>
            )}
            {createBlog.isError && (
              <p className="text-sm text-destructive flex items-center">
                Failed to create blog. Please try again.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
