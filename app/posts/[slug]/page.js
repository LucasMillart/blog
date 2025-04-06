import { notFound } from 'next/navigation'
import fs from 'fs/promises'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import MDXComponent from '@/components/MDXContent'

export default async function Page({ params }) {
  const { slug } = await params

  try {
    // Trouver le fichier qui correspond au slug (sans les chiffres)
    const files = await fs.readdir(path.join(process.cwd(), 'content'))
    const mdxFile = files.find(file => file.replace(/^\d+-|\.mdx$/g, '') === slug)

    if (!mdxFile) {
      return notFound()
    }

    // Lire le fichier MDX trouvé
    const filePath = path.join(process.cwd(), 'content', mdxFile)
    const source = await fs.readFile(filePath, 'utf8')

    // Serialize the MDX content
    const mdxSource = await serialize(source, {
      // Add any MDX options here if needed
      parseFrontmatter: true,
    })

    return <MDXComponent source={mdxSource} />
  } catch (error) {
    console.error(`Error loading post: ${slug}`, error)
    notFound()
  }
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'content'))
  const mdxFiles = files.filter(file => file.endsWith('.mdx'))

  return mdxFiles.map(file => ({
    slug: file.replace(/^\d+-|\.mdx$/g, '')
  }))
}

export const dynamicParams = false