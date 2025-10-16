import { getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Guía Dental para Miami | DentistasMiami',
  description: 'Consejos, guías y información sobre dentistas, precios dentales, y salud oral en Miami. Información confiable en español.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Stronger Teal Background */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Guías, consejos y precios sobre salud dental en Miami
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => {
              // Calculate read time
              const wordCount = post.content.split(/\s+/).length;
              const readTime = Math.ceil(wordCount / 200);

              return (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  {/* Image */}
                  {post.image && (
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{readTime} min</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-teal-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                    >
                      Leer más
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500 text-lg">
              No hay artículos publicados todavía. ¡Vuelve pronto!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}