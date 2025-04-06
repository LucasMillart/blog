import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter'; // Pour parser le frontmatter (à installer via npm)

const postsDirectory = path.join(process.cwd(), 'content');

// Récupérer tous les posts
export async function getAllPosts() {
  const files = await fs.readdir(postsDirectory);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));

  const posts = await Promise.all(
    mdxFiles.map(async (filename) => {
      // Modifier cette ligne pour enlever les chiffres du début
      const slug = filename.replace(/^\d+-|\.mdx$/g, '');
      const post = await getPostBySlug(slug);
      return post;
    })
  );

  // Trier les posts par date, du plus récent au plus ancien
  return posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
}

// Récupérer un post spécifique par son slug
export async function getPostBySlug(slug) {
  try {
    // Trouver le fichier qui correspond au slug sans les chiffres
    const files = await fs.readdir(postsDirectory);
    const mdxFile = files.find(file => file.replace(/^\d+-|\.mdx$/g, '') === slug);

    if (!mdxFile) {
      throw new Error(`No file found for slug: ${slug}`);
    }

    const filePath = path.join(postsDirectory, mdxFile);
    const fileContent = await fs.readFile(filePath, 'utf8');

    // Utiliser gray-matter pour extraire le frontmatter
    const { data: meta, content } = matter(fileContent);

    return {
      slug,
      meta,
      content
    };
  } catch (error) {
    console.error(`Error loading post: ${slug}`, error);
    throw error;
  }
}

// Filtrer les posts par tag/catégorie
export async function getPostsByTag(tag) {
  const allPosts = await getAllPosts();
  return allPosts.filter(post =>
    post.meta.tags && post.meta.tags.includes(tag)
  );
}