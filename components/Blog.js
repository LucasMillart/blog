import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/posts";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <section className="py-10 px-5 text-center">
      <h1 className="text-sm font-light mb-4 tracking-[10]">THE<span className='ml-5 tracking-[10]'>BLOG</span></h1>
      <h2 className="text-5xl font-bold mb-6">
        Explorez votre curiosité.
      </h2>
      <p className="text-lg mb-6">
        Explorations approfondies sur le code, la création de SaaS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div key={post.slug} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            {post.meta.coverImage && (
              <figure>
                <Image
                  src={post.meta.coverImage}
                  alt={post.meta.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
            )}
            <div className="card-body p-6">
              {post.meta.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.meta.tags.map(tag => (
                    <span key={tag} className="badge badge-sm badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="card-title text-xl mb-2">{post.meta.title}</h3>
              <p className="text-base-content/70 text-sm mb-4 flex-1">
                {post.meta.excerpt || post.meta.description}
              </p>
              <div className="card-actions justify-between items-center mt-auto">
                <span className="text-xs text-base-content/60">
                  {new Date(post.meta.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <Link href={`/posts/${post.slug}`} className="btn btn-sm btn-primary">
                  Lire l&apos;article →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4">Chargement des articles...</p>
        </div>
      )}
    </section>
  );
}