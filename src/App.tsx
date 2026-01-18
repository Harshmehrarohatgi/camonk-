import { useState } from 'react';
import { BlogList } from './components/BlogList';
import { BlogDetail } from './components/BlogDetail';
import { CreateBlogForm } from './components/CreateBlogForm';
import { ThemeToggle } from './components/ThemeToggle';
import { Button } from './components/ui/button';
import { PenSquare, BookOpen } from 'lucide-react';

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-2.5 shadow-lg">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">CA Monk</h1>
                <p className="text-sm text-muted-foreground">
                  Finance & Accounting Excellence
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                onClick={() => setShowCreateForm(!showCreateForm)}
                variant={showCreateForm ? 'outline' : 'default'}
                className="gap-2 shadow-sm"
                size="lg"
              >
                {showCreateForm ? (
                  <>
                    <BookOpen className="h-4 w-4" />
                    View Blogs
                  </>
                ) : (
                  <>
                    <PenSquare className="h-4 w-4" />
                    Create Blog
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[calc(100vh-88px)]">
        {showCreateForm ? (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <CreateBlogForm
              onSuccess={() => {
                setShowCreateForm(false);
              }}
            />
          </div>
        ) : (
          <div className="h-full flex overflow-hidden">
            {/* Left Panel - Blog List */}
            <div className="w-[30%] flex flex-col border-r bg-muted/10">
              <div className="px-6 py-5 border-b bg-card/50">
                <h3 className="text-lg font-semibold tracking-tight">Latest Articles</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore our collection
                </p>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <BlogList
                  onSelectBlog={setSelectedBlogId}
                  selectedBlogId={selectedBlogId}
                />
              </div>
            </div>

            {/* Right Panel - Blog Detail */}
            <div className="w-[70%] flex flex-col overflow-hidden bg-background">
              <div className="flex-1 overflow-y-auto">
                <div className="max-w-5xl mx-auto px-8 py-8">
                  <BlogDetail blogId={selectedBlogId} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
