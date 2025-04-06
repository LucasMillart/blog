import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Header from '@/components/Header';

export default async function Page() {
  // Utiliser la fonction getAllPosts pour récupérer tous les articles
  const posts = await getAllPosts();

  return (
    <div>
      <Header />

      <div className="text-center py-6 px-4">
        <h1 className="text-sm font-light mb-4 tracking-[10]">THE<span className='ml-5 tracking-[10]'>BLOG</span></h1>
        <h2 className="text-5xl font-bold mb-6">
          Lisez les éditions passées.
        </h2>
        <p className="text-lg mb-6">
          Explorations approfondies sur le code, la création de SaaS.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="card card-border bg-base-100">
              <div className="card-body">
                <Link href={`/posts/${post.slug}`}>
                  <h2 className="card-title text-2xl">{post.meta.title}</h2>
                </Link>
                <div className="card-actions">
                  <Link href={`/posts/${post.slug}`} className="btn btn-link px-0">
                    Lire l&apos;article
                  </Link>
                </div>

                <div className="divider my-2"></div>

                <div className="flex items-center text-sm text-base-content/70">
                  <span>{post.meta.author}</span>
                  <span className='mr-5 ml-5'>•</span>
                  <span>
                    {new Date(post.meta.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}