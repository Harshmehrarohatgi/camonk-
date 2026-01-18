# CA Monk Blog Application

A modern, full-featured blog application built with React, TypeScript, TanStack Query, and Tailwind CSS. This project demonstrates best practices in frontend development with server-state management, responsive design, and a polished user interface.

![CA Monk Blog](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.62-red) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4)

## 🚀 Features

### Core Functionality
- ✅ **View All Blogs** - Browse through all available blog posts with smooth loading states
- ✅ **View Blog Details** - Read full blog content with rich formatting
- ✅ **Create New Blogs** - Add new blog posts with form validation
- ✅ **Real-time Updates** - Automatic query invalidation after creating blogs

### UI/UX Enhancements
- 🌓 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Responsive Design** - Optimized for all screen sizes
- ⚡ **Loading Animations** - Skeleton loaders for better user feedback
- 🎨 **Modern UI** - Built with shadcn/ui components
- 🖼️ **Rich Blog Cards** - Category tags, dates, and descriptions
- 📖 **Beautiful Blog Detail View** - Cover images, metadata, and formatted content

## 🛠️ Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript 5.6** - Type-safe development
- **TanStack Query 5.62** - Powerful server-state management
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **shadcn/ui** - High-quality accessible components
- **Vite** - Lightning-fast build tool
- **JSON Server** - Mock REST API for development

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd camonk-interview
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npm run server
   ```
   The API will run on `http://localhost:3001`

4. **Start the Development Server (Frontend)**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
camonk-interview/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── BlogCard.tsx     # Blog list item component
│   │   ├── BlogDetail.tsx   # Blog detail view component
│   │   ├── BlogList.tsx     # Blog list container
│   │   ├── CreateBlogForm.tsx # Blog creation form
│   │   └── ThemeToggle.tsx  # Dark/Light mode toggle
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── types/
│   │   └── blog.ts          # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── db.json                  # JSON Server database
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 📝 API Endpoints

The JSON Server provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Fetch all blogs |
| GET | `/blogs/:id` | Fetch a specific blog |
| POST | `/blogs` | Create a new blog |

### Blog Data Structure

```typescript
interface Blog {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}
```

## 🎯 Key Implementation Details

### TanStack Query Integration
- **Query Keys**: Organized for efficient caching (`['blogs']`, `['blog', id]`)
- **Automatic Refetching**: Smart refetch on window focus
- **Query Invalidation**: Automatic cache updates after mutations
- **Loading & Error States**: Comprehensive state handling

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **TypeScript First**: Fully typed props and data structures
- **Reusable UI Components**: Built with shadcn/ui for consistency
- **Performance Optimized**: Minimal re-renders with proper memoization

### Styling Approach
- **Tailwind CSS**: Utility-first styling for rapid development
- **Custom Theme**: Configured with CSS variables for dark/light modes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animations**: Smooth transitions and hover effects

## 🌟 Features Showcase

### Blog List View
- Displays all blogs in a clean, card-based layout
- Shows category tags, publish date, and description
- Hover effects and selected state indicators
- Smooth loading skeletons while fetching data

### Blog Detail View
- Large, prominent cover images
- Well-formatted content with proper typography
- Metadata display (category, date, read time)
- Tag system for easy categorization

### Create Blog Form
- Comprehensive form with validation
- Support for multiple categories
- Cover image URL input
- Success feedback and automatic list refresh

### Theme System
- Persistent theme preference (localStorage)
- Smooth transitions between modes
- Accessible color contrast in both themes
- System preference detection on first load

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Start JSON server
npm run server

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px (Stacked layout)
- **Tablet**: 768px - 1024px (Optimized spacing)
- **Desktop**: > 1024px (Full two-panel layout)

## 🎨 Design Decisions

1. **30/70 Split Layout**: Blog list (30%) and detail view (70%) for optimal reading
2. **Skeleton Loaders**: Better perceived performance during data fetching
3. **Card-Based UI**: Modern, scannable interface for blog listings
4. **Gradient Accents**: Professional look with subtle gradients
5. **Icon Integration**: Lucide React icons for visual clarity

## 🚧 Future Enhancements

- [ ] Edit existing blogs
- [ ] Delete blogs with confirmation
- [ ] Search and filter functionality
- [ ] Pagination for large blog lists
- [ ] Image upload for cover images
- [ ] Rich text editor for blog content
- [ ] User authentication
- [ ] Comment system
- [ ] Share functionality

## 📄 License

This project is part of a technical interview assignment for CA Monk.

## 👨‍💻 Author

**Harsh Mehra Rohatgi**

---

Built with ❤️ using React, TypeScript, and modern web technologies.
