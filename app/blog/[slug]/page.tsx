import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';
import Link from 'next/link';

import remarkGfm from 'remark-gfm';  // ADD THIS LINE

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return {
    title: `${post.title} | DentistasMiami`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// Custom MDX components with explicit styling - TEAL COLORS
const components = {
  h2: (props: any) => (
    <h2 
      className="text-3xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b-2 border-gray-200" 
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="text-2xl font-bold text-gray-900 mt-10 mb-4" 
      {...props} 
    />
  ),
  h4: (props: any) => (
    <h4 
      className="text-xl font-semibold text-gray-900 mt-8 mb-3" 
      {...props} 
    />
  ),
  p: (props: any) => (
    <p 
      className="text-gray-700 text-lg leading-relaxed mb-6" 
      {...props} 
    />
  ),
  ul: (props: any) => (
    <ul 
      className="my-6 space-y-3 bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500" 
      {...props} 
    />
  ),
  ol: (props: any) => (
    <ol 
      className="my-6 space-y-3 list-decimal list-inside" 
      {...props} 
    />
  ),
  li: (props: any) => (
    <li 
      className="text-gray-700 text-lg leading-relaxed" 
      {...props} 
    />
  ),
  a: (props: any) => (
    <a 
      className="text-teal-600 font-medium hover:underline" 
      {...props} 
    />
  ),
  strong: (props: any) => (
    <strong 
      className="font-bold text-gray-900" 
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-teal-500 bg-teal-50 pl-6 pr-6 py-4 my-8 rounded-r-lg italic text-gray-700" 
      {...props} 
    />
  ),
  hr: (props: any) => (
    <hr 
      className="my-12 border-t-2 border-gray-300" 
      {...props} 
    />
  ),
  // TABLE STYLING - ADD THESE
  table: (props: any) => (
    <div className="my-8 overflow-x-auto">
      <table 
        className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg overflow-hidden" 
        {...props} 
      />
    </div>
  ),
  thead: (props: any) => (
    <thead 
      className="bg-teal-600" 
      {...props} 
    />
  ),
  tbody: (props: any) => (
    <tbody 
      className="divide-y divide-gray-200 bg-white" 
      {...props} 
    />
  ),
  tr: (props: any) => (
    <tr 
      className="hover:bg-teal-50 transition-colors" 
      {...props} 
    />
  ),
  th: (props: any) => (
    <th 
      className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td 
      className="px-6 py-4 text-gray-700 text-base" 
      {...props} 
    />
  ),
};

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="w-full bg-white">
          <div className="max-w-5xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* White content box */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{readTime} min de lectura</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {/* MDX Content with Custom Components */}
          <div>
          <MDXRemote 
  source={post.content} 
  components={components}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    }
  }}
/>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            ← Volver al blog
          </Link>
        </div>

        {/* CTA Box */}
        <div className="mt-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg shadow-lg p-8 md:p-10 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            ¿Buscas un dentista en Miami?
          </h3>
          <p className="text-teal-100 mb-6 text-lg">
            Explora nuestro directorio completo de dentistas verificados en tu vecindario.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/dentistas"
              className="inline-flex items-center justify-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-md"
            >
              Ver Dentistas
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center bg-teal-500 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-400 transition-colors"
            >
              Comparar Precios
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}