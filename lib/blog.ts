import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Types for our blog post
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  keywords: string[];
  content: string;
}

// Where our blog posts live
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog post slugs (filenames without .mdx)
 * Example: 'cuanto-cuesta-limpieza-dental-miami.mdx' -> 'cuanto-cuesta-limpieza-dental-miami'
 */
export function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Parse frontmatter and content
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    category: data.category,
    image: data.image,
    keywords: data.keywords || [],
    content,
  };
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const posts = slugs.map((slug) => getBlogPost(slug));
  
  // Sort by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}